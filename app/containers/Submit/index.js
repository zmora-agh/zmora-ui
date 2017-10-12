/*
 *
 * Submit
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { gql } from 'react-apollo';
import omitBy from 'lodash/omitBy';
import moment from 'moment';

import makeSelectSubmit from './selectors';
import { submit, submitModalClose, submitModalChangeContest } from './actions';

import SubmitModal, { ContestsPropType, ProblemsPropType } from '../../components/SubmitModal';
import { isContestInProgress, isProblemBeforeHardDeadline } from '../../utils/model';

export const ContestsListForLayout = gql`
  query ContestsListForSubmit { 
    contests {
      id
      name
      start
      signupDuration
      duration
      description
      joined
    }
  }
`;
export const ProblemsForSubmitModal = gql`
 query ProblemsForSubmitModal($contestId: Int!) {
    contest(id: $contestId) {
      id
      problems {
        id
        name
        shortcode
        hardDeadline
      }
    }
  }
`;

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
      contestId: props.contestId,
      problemId: props.problemId,
    };

    this.onContestChange = this.onContestChange.bind(this);
    this.onProblemChange = this.onProblemChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onContestChange(contest) {
    if (!contest) {
      this.setState({ contestId: undefined });
      return;
    }

    if (this.state.contestId === contest.id) return; // Cuts off circular dependency
    this.props.dispatch(submitModalChangeContest(contest.id));
    this.setState({ contestId: contest.id });
  }

  onProblemChange(problem) {
    this.setState({ problemId: problem ? problem.id : undefined });
  }

  onInputChange(e) {
    e.persist();
    this.setState((oldState) => ({
      inputs: e.target.files[0] ?
        Object.assign(oldState.inputs, { [e.target.name]: e.target.files[0] }) :
        omitBy(oldState.inputs, (value, index) => index === e.target.name),
    }));
  }

  onSubmit(e) {
    this.props.dispatch(submit(this.state.inputs, this.state.contestId, this.state.problemId));
    e.preventDefault();
  }

  onCancel() {
    this.props.dispatch(submitModalClose());
  }

  render() {
    const serverTime = moment().add(this.props.offset, 'seconds');
    const contests = this.props.contests && !this.props.contests.loading &&
      this.props.contests.data.contests.filter((contest) => contest.joined)
        .filter((contest) => isContestInProgress(contest, serverTime));
    const problems = this.props.problems && !this.props.problems.loading &&
      this.props.problems.data.contest.problems
        .filter((problem) => isProblemBeforeHardDeadline(problem, serverTime));
    const hasFiles = Object.values(this.state.inputs).some((input) => input);
    const submittable = this.state.contestId !== undefined && this.state.problemId !== undefined && hasFiles;

    return (
      <SubmitModal
        contests={contests}
        problems={problems}
        onContestChange={this.onContestChange}
        onProblemChange={this.onProblemChange}
        selectedContestId={this.props.contestId}
        selectedProblemId={this.props.problemId}
        open={this.props.open}
        onSubmit={this.onSubmit}
        onInputChange={this.onInputChange}
        onCancel={this.onCancel}
        submittable={submittable}
        uploading={this.props.uploading}
      />
    );
  }
}

Submit.propTypes = {
  contests: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({
      contests: ContestsPropType.isRequired,
    }),
  }),
  problems: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({
      contest: PropTypes.shape({
        problems: ProblemsPropType.isRequired,
      }),
    }),
  }),
  open: PropTypes.bool,
  contestId: PropTypes.number,
  problemId: PropTypes.number,
  offset: PropTypes.number,
  uploading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(makeSelectSubmit, (dispatch) => ({ dispatch }))(Submit);

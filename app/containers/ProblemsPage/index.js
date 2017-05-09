/*
 *
 * ProblemsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { groupBy } from 'lodash';

import Text from 'material-ui/Text';

import { problemPage } from '../../local-urls';
import { makeSelectProblems } from '../App/selectors';
import { problemRowPropType } from '../../components/ProblemsTable/constants';

import FetchView from '../../components/FetchView';
import ProblemCategory from '../../components/ProblemCategory';
import ExpandableTable from '../../components/ExpandableTable';

import { getProblems } from './actions';
import messages from './messages';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

export class ProblemsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getProblems(getContestId(this.props)));
  }

  render() {
    const contestId = getContestId(this.props);

    if (this.props.children) return this.props.children;

    if (this.props.problems && this.props.problems.length === 0) {
      return <Text><FormattedMessage {...messages.empty} /></Text>;
    }

    const categories = groupBy(this.props.problems, 'category');

    return (<FetchView>
      {this.props.problems &&
      <ExpandableTable>
        {Object.keys(categories).map((category) => <ProblemCategory
          key={category}
          name={category}
          contestId={contestId}
          problems={categories[category]}
          onProblemClick={(problemId) => this.props.dispatch(push(problemPage(contestId, problemId)))}
          onPdfClick={(problemId) => console.log(problemId)}
        />)}
      </ExpandableTable>}
    </FetchView>);
  }
}

ProblemsPage.propTypes = {
  problems: PropTypes.arrayOf(PropTypes.shape(problemRowPropType)),
  children: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = (state, props) => createStructuredSelector({
  problems: makeSelectProblems(getContestId(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsPage);

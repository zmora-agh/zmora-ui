/*
 *
 * ProblemPage
 *
 */

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { gql, graphql } from 'react-apollo';

import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import customPropTypes from 'material-ui/utils/customPropTypes';

import { problemContentPropTypes } from '../../components/ProblemView/constants';
import { submitSetContext } from '../Submit/actions';

import FetchView from '../../components/FetchView';
import ProblemView from '../../components/ProblemView';
import ProblemExamplesPage from '../ProblemExamplesPage';
import ProblemSubmitsPage from '../ProblemSubmitsPage';
import QuestionsPage from '../QuestionsPage';

import messages from './messages';
import { HASH_PREFIXES, SUBMITS_HASH_PREFIX } from './constants';
import SubmitDetails from '../SubmitDetails/index';

const styleSheet = createStyleSheet('ProblemPage', (theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.appBar,
  },
}));

const getIds = (props) => ({
  contestId: parseInt(props.params.contest_id, 10),
  problemId: parseInt(props.params.problem_id, 10),
});

const parseHash = (hash) => ({
  prefix: hash.split('=')[0].replace('#', ''),
  value: hash.split('=')[1],
});

function getSwipeableViewIndex(hashPrefix) {
  return HASH_PREFIXES.includes(hashPrefix) ? HASH_PREFIXES.indexOf(hashPrefix) : 0;
}

const ProblemForLayout = gql`
  query ProblemForLayout($problemId: Int!) { 
    problem(id: $problemId) {
      id
      name
      description
    }
  }
`;

@connect(null, (dispatch) => ({ dispatch }))
@graphql(ProblemForLayout, { options: (props) => ({ variables: { problemId: getIds(props).problemId } }) })
export default class ProblemPage extends React.Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  constructor(props) {
    super(props);
    this.parseProps(props);
  }

  componentDidMount() {
    this.props.dispatch(submitSetContext({ problemId: this.ids.problemId }));
  }

  componentWillUpdate(nextProps) {
    this.parseProps(nextProps);
  }

  componentWillUnmount() {
    this.props.dispatch(submitSetContext({ problemId: undefined }));
  }

  ids = {};

  handleChange = (event, index) => {
    this.setState({ index });
    window.location.hash = HASH_PREFIXES[index];
  };

  parseProps(props) {
    const hash = parseHash(props.location.hash);
    this.state = {
      hash,
      index: getSwipeableViewIndex(hash.prefix),
    };

    this.ids = getIds(props);
  }

  handleChangeIndex = (index) => {
    this.setState({ index });
    window.location.hash = HASH_PREFIXES[index];
  };

  render() {
    if (this.props.children) return this.props.children;

    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Paper>
        <div className={classes.appBar}>
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            textColor="accent"
            centered
          >
            <Tab label={<FormattedMessage {...messages.content} />} />
            <Tab label={<FormattedMessage {...messages.examples} />} />
            <Tab label={<FormattedMessage {...messages.submits} />} />
            <Tab label={<FormattedMessage {...messages.questions} />} />
          </Tabs>
        </div>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <FetchView>{this.props.data.loading ? undefined : <ProblemView {...this.props.data.problem} />}</FetchView>
          <ProblemExamplesPage {...this.ids} defer={this.state.index !== 1} />
          <ProblemSubmitsPage {...this.ids} defer={this.state.index !== 2} />
          <QuestionsPage {...this.ids} />
        </SwipeableViews>
        <SubmitDetails
          {...this.ids}
          submitId={this.state.hash.prefix === SUBMITS_HASH_PREFIX && !isNaN(this.state.hash.value) ?
            parseInt(this.state.hash.value, 10) : undefined}
        />
      </Paper>
    );
  }
}

ProblemPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    loading: PropTypes.bool,
    problem: PropTypes.shape(problemContentPropTypes),
  })),
  children: PropTypes.node,
  dispatch: PropTypes.func,
};

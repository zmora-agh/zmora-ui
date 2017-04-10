/*
 *
 * ProblemsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { transform } from 'lodash';

import { problemPage } from '../../local-urls';
import { makeSelectProblems } from '../App/selectors';
import { problemRowPropType } from '../../components/ProblemsTable/constants';

import ProblemCategory from '../../components/ProblemCategory';
import ExpandableTable from '../../components/ExpandableTable';

import { getProblems } from './actions';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

const groupBy = (collection, property) => transform(collection, (result, item, name) => {
  result[item[property]] = result[item[property]] || {}; // eslint-disable-line no-param-reassign
  result[item[property]][name] = item; // eslint-disable-line no-param-reassign
});

export class ProblemsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getProblems(getContestId(this.props)));
  }

  render() {
    if (this.props.children) return this.props.children;

    const categories = groupBy(this.props.problems, 'category');

    return (<ExpandableTable>
      {Object.keys(categories).map((category) => <ProblemCategory
        key={category}
        onProblemClick={(problemId) => this.props.dispatch(push(problemPage(getContestId(this.props), problemId)))}
        onPdfClick={(problemId) => console.log(problemId)}
        onSubmitClick={(problemId) => console.log(problemId)}
        problems={categories[category]}
        name={category}
      />)}
    </ExpandableTable>);
  }
}

ProblemsPage.propTypes = {
  problems: PropTypes.objectOf(PropTypes.shape(problemRowPropType)),
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

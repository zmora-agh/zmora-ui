/*
 *
 * ProblemsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';

import { makeSelectProblems } from '../App/selectors';
import ProblemCategory from '../../components/ProblemCategory';
import ExpandableTable from '../../components/ExpandableTable';
import { getProblems } from './actions';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

export class ProblemsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getProblems(getContestId(this.props)));
  }

  mockedData = [
    {
      id: 1,
      shortcode: 'DUP',
      category: 'Logiczne myślenie',
      name: 'Jesteś kretynem?',
      points: '15',
      deadline: '15.06.2017',
      description: '',
    },
    {
      id: 2,
      shortcode: 'WKURW',
      category: 'Logiczne myślenie',
      name: 'Implementacja listy w 18 językach',
      points: '21',
      deadline: '13.06.2017',
      description: '',
    },
    {
      id: 3,
      shortcode: 'JPRDL',
      category: 'BoiTZO',
      name: 'AHP',
      points: '0',
      deadline: 'You should know',
      description: '',
    },
  ];

  render() {
    if (this.props.children) return this.props.children;

    const categories = _.groupBy(this.mockedData, (problem) => problem.category);

    return (<ExpandableTable>
      {Object.keys(categories).map((category) => <ProblemCategory
        key={category}
        onProblemClick={(problemId) => console.log(problemId)}
        onPdfClick={(problemId) => console.log(problemId)}
        onSubmitClick={(problemId) => console.log(problemId)}
        problems={categories[category]}
        name={category}
      />)}
    </ExpandableTable>);
  }
}

ProblemsPage.propTypes = {
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

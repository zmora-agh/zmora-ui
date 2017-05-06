/*
 *
 * QuestionsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { QuestionCard } from '../../components/QuestionCard';
import { makeSelectProblemQuestions } from '../App/selectors';
import { getQuestions } from './actions';

export class QuestionsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    contestId: PropTypes.number.isRequired,
    problemId: PropTypes.number.isRequired,
    questions: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(getQuestions(this.props.contestId, this.props.problemId));
  }


  render() {
    return (
      <div key={this.props.contestId}>
        {this.props.questions && this.props.questions.map((q) => mapToCard(q)
        )}
      </div>
    );
  }
}

function mapToCard(question) {
  console.log(Object.prototype.toString.call(question.answers));
  const ansArr = question.answers.map((ans) => ans.answer);
  return <QuestionCard key={question.question} question={question.question} answers={ansArr} />;
}
// <QuestionCard question={q.question} answers={ans} />
// uestion.answers.map((ans) =>
// { /* <QuestionCard question={question.question} answers={ans} />);*/ }

// console.log(Object.prototype.toString.call(q.answers))
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = (state, props) => createStructuredSelector({
  questions: makeSelectProblemQuestions(props.contestId, props.problemId),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);


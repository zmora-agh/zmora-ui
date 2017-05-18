/*
 *
 * QuestionsPage
 *
 */

import React, { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

import QuestionCard from '../../components/QuestionCard';

const ProblemExamplesForLayout = gql`
  query ProblemExamplesForLayout($problemId: Int!) { 
    problem(id: $problemId) {
      id
      questions {
        id
        answers{
          id
          answer
          author {
            id
            name
          }
          answered
        }
        author {
          id
          name
        }
        asked
        question
      }
    }
  }
`;

@graphql(ProblemExamplesForLayout, {
  options: ({ problemId }) => ({ variables: { problemId } }),
  skip: ({ defer }) => defer,
})
// eslint-disable-next-line react/prefer-stateless-function
export default class QuestionsPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    return (
      <div>
        {this.props.data.problem && this.props.data.problem.questions.map((q) =>
          <QuestionCard key={q.id} question={q} />
        )}
      </div>
    );
  }
}

/**
 * Created by maxmati on 3/30/17.
 */
import React from 'react';
import { gql, graphql } from 'react-apollo';

export function exactOnly(Component) {
  const parent = (props) => {
    if (props.children) return props.children;

    return (<Component {...props} />);
  };

  parent.propTypes = {
    children: React.PropTypes.node,
  };

  return parent;
}

const ShowName = (getter) => (d) => <span>{d.data.loading ? undefined : getter(d)}</span>;

export const fetchContestName = (name, params) => {
  const query = gql`
  query ContestName($contestId: Int!) {
    contest(id: $contestId) {
      id
      name
    }
  }`;

  const Name = graphql(query, {
    options: { variables: { contestId: parseInt(params.contest_id, 10) } },
  })(ShowName((x) => x.data.contest.name));

  return <Name />;
};

export const fetchProblemName = (name, params) => {
  const query = gql`
  query ProblemName($problemId: Int!) {
    problem(id: $problemId) {
      id
      shortcode
    }
  }`;

  const Name = graphql(query, {
    options: { variables: { problemId: parseInt(params.problem_id, 10) } },
  })(ShowName((x) => x.data.problem.shortcode));

  return <Name />;
};

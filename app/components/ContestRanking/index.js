import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';

import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import messages from './messages';

const comprare = (entry1, entry2) => {
  const solutions1 = entry1.solutions;
  const solutions2 = entry2.solutions;

  const required = (solutions) => solutions.filter((solution) => solution.problem.required === true);
  const optional = (solutions) => solutions.filter((solution) => solution.problem.required === false);
  const attempts = (solutions) => solutions.reduce((a, b) => a.attempts + b.attempts, { attempts: 0 });

  const requiredAttempts = (entry) => attempts(required(entry));
  const optionalAttempts = (entry) => attempts(optional(entry));

  const requiredRank = required(solutions2).length - required(solutions1).length;
  const optionalRank = optional(solutions2).length - optional(solutions1).length;
  const requiredAttemptRank = requiredAttempts(solutions1) - requiredAttempts(solutions2);
  const optionalAttemptRank = optionalAttempts(solutions1) - optionalAttempts(solutions2);

  return requiredRank || optionalRank || requiredAttemptRank || optionalAttemptRank;
};

const solutionStars = (attempts) => attempts > 4 ? ` (${attempts})` : '*'.repeat(attempts);

export default function ContestRanking(props) {
  const ranked = [...props.data].sort(comprare);

  return (
    <div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell numeric><FormattedMessage {...messages.rank} /></TableCell>
              <TableCell><FormattedMessage {...messages.name} /></TableCell>
              <TableCell><FormattedMessage {...messages.attempts} /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranked.map((n, index) =>
              <TableRow key={n.user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{n.user.name}</TableCell>
                <TableCell>
                  {n.solutions.map((solution) =>
                    `${solution.problem.shortcode}${solutionStars(solution.attempts)}`).join(', ')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export const ContestRankingPropTypes = PropTypes.arrayOf(PropTypes.shape({
  user: PropTypes.shape({
    name: PropTypes.string.isRequred,
  }).isRequired,
  solutions: PropTypes.arrayOf(PropTypes.shape({
    attempts: PropTypes.number.isRequired,
    problem: PropTypes.shape({
      shortcode: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
    }).isRequired,
  })).isRequired,
}));

ContestRanking.propTypes = {
  data: ContestRankingPropTypes,
};

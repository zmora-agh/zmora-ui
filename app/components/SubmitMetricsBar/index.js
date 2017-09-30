import React, { PropTypes } from 'react';
import { gql } from 'react-apollo';
import { Map } from 'immutable';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import Card, { CardActions } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ParticipationsIcon from 'material-ui-icons/People';
import ResultsIcon from 'material-ui-icons/AssignmentTurnedIn';

import messages from './messages';
import { STATUS_ERR, STATUS_OK } from '../StatusText/constants';

import { contestParticipants, contestResults } from '../../local-urls';

export const SubmitMetricsFragment = gql`
  fragment SubmitMetrics on Contest {
    submitMetrics {
      status
      submits
    }
  }
`;

export default function SubmitMetricsBar({ contestId, metrics }) {
  const aggregatedMetrics = metrics ?
      Map(metrics.map((metric) => [metric.status, metric.submits])) : Map();

  const allSubmitsCount = aggregatedMetrics.reduce((s, v) => s + v);

  return (
    <Card style={{ margin: 16 }}>
      <CardActions>
        <Link to={contestParticipants(contestId)}>
          <IconButton><ParticipationsIcon /></IconButton>
        </Link>
        <Link to={contestResults(contestId)}>
          <IconButton><ResultsIcon /></IconButton>
        </Link>
        <Grid container align="center" justify="space-around">
          <Typography type="body1">
            <FormattedMessage {...messages.submited} values={{ count: allSubmitsCount }} />
          </Typography>
          <Typography type="body1">
            <FormattedMessage {...messages.valid} values={{ count: aggregatedMetrics.get(STATUS_OK, 0) }} />
          </Typography>
          <Typography type="body1">
            <FormattedMessage {...messages.invalid} values={{ count: aggregatedMetrics.get(STATUS_ERR, 0) }} />
          </Typography>
        </Grid>
      </CardActions>
    </Card>
  );
}
SubmitMetricsBar.propTypes = {
  contestId: PropTypes.number.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.string.isRequired,
    submits: PropTypes.number.isRequired,
  })),
};

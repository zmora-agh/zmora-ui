import React, { PropTypes } from 'react';
import { gql } from 'react-apollo';
import moment from 'moment';

import Table, { TableBody, TableRow, TableCell } from 'material-ui/Table';

import { sortBy } from '../../utils/render';

import EnhancedTableHead from '../EnhancedTableHead/index';

export const ContestParticipationsFragment = gql`
  fragment ContestParticipations on ContestParticipation {
    user {
      id
      name
    }
    joined
  }
`;

const columns = [
  { id: 'index', label: '#' },
  { id: 'name', label: 'Name' },
  { id: 'joined', label: 'Join date' },
];

export const participationsPropTypes =
  PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequried,
    }).isRequired,
    joined: PropTypes.string.isRequired,
  }).isRequired);

export default class ContestParticipants extends React.PureComponent {
  static propTypes = {
    participations: participationsPropTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'joined',
      desc: false,
    };
  }

  flattenParticipation = (participation) => ({
    ...participation.user,
    joined: participation.joined,
  });

  handleRequestSort = (event, orderBy) => {
    if (orderBy === 'index') return;

    this.setState({
      desc: this.state.orderBy === orderBy ? !this.state.desc : false,
      orderBy,
    });
  };

  render() {
    const { desc, orderBy } = this.state;
    const participants = this.props.participations.map(this.flattenParticipation);
    const sortedParticipants = sortBy(participants, (participant) => participant[orderBy], desc);

    return (
      <Table>
        <EnhancedTableHead
          onRequestSort={this.handleRequestSort}
          order={desc ? 'desc' : 'asc'}
          orderBy={orderBy}
          columns={columns}
        />
        <TableBody>
          {sortedParticipants.map((participant, index) => (
            <TableRow key={participant.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{participant.name}</TableCell>
              <TableCell>{moment(participant.joined).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

}


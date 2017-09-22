import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { gql, graphql } from 'react-apollo';

import { getCurrentTimeSuccess } from '../App/actions';

const GetCurrentTime = gql`
  query GetCurrentTime {
    time
  }
`;


@graphql(GetCurrentTime, { options: { pollInterval: 5 * 60 * 1000 } })
@connect(null, (dispatch) => ({ dispatch }))
export default class TimeProvider extends React.PureComponent {

  constructor(props) {
    super(props);
    this.parseProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.parseProps(nextProps);
  }

  parseProps(props) {
    if (!props.data.loading && !props.data.error) {
      this.props.dispatch(getCurrentTimeSuccess(moment(props.data.time)));
    }
  }

  render() {
    return this.props.children ? this.props.children : null;
  }
}

TimeProvider.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
};

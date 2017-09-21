/*
 *
 * SubmitDetailsModal
 *
 */

import React, { PropTypes } from 'react';
import { graphql, gql } from 'react-apollo';
import SubmitDetailsModal, { SubmitDetailsFragment } from '../../components/SubmitDetailsModal';

const SubmitDetailsQuery = gql`
  query SubmitDetailsQuery($submitId: Int!) {
    submit(id: $submitId) {
      ...SubmitDetails
    }
  }
  ${SubmitDetailsFragment}
`;

function SubmitDetails(props) {
  return (<SubmitDetailsModal
    open={props.submitId !== undefined}
    loading={props.submitId && (!props.data || props.data.loading)}
    data={props.data && props.data.submit}
    onClose={props.onClose}
  />);
}
SubmitDetails.propTypes = {
  submitId: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    submit: SubmitDetailsModal.propTypes.data,
  }),
};

export default graphql(SubmitDetailsQuery, {
  options: (props) => ({ variables: { submitId: props.submitId } }),
  skip: (props) => !props.submitId,
})(SubmitDetails);


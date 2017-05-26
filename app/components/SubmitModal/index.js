/**
*
* SubmitModal
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import Dialog, { DialogTitle, DialogActions, DialogContentText, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import LinearProgress from 'material-ui/Progress/LinearProgress';

import SelectMenu from './SelectMenu';

import messages from './messages';
import contestMessages from '../../containers/ContestsPage/messages';
import problemMessages from '../../containers/ProblemsPage/messages';

const Layout = (props) => (
  <Dialog open={props.open} onBackdropClick={props.onCancel}>
    <DialogTitle><FormattedMessage {...messages.header} /></DialogTitle>
    {props.children}
  </Dialog>
);

Layout.propTypes = {
  open: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default function SubmitModal(props) {
  const selectedContest = props.contests ?
    props.contests.findIndex((contest) => contest.id === props.selectedContestId) :
    undefined;

  const selectedProblem = props.problems ?
    props.problems.findIndex((problem) => problem.id === props.selectedProblemId) :
    undefined;

  if (props.contests && props.contests.length === 0) {
    return (
      <Layout {...props}>
        <div>
          <DialogContent>
            <DialogContentText><FormattedMessage {...contestMessages.empty} /></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onCancel} primary><FormattedMessage {...messages.close} /></Button>
          </DialogActions>
        </div>
      </Layout>
    );
  }

  return (
    <Layout {...props}>
      <form onSubmit={props.onSubmit}>
        {props.uploading && <LinearProgress />}
        <DialogContent>
          <SelectMenu
            header={<FormattedMessage {...messages.contest} />}
            options={props.contests}
            primary={(contest) => contest.name}
            secondary={(contest) => contest.description}
            onChange={props.onContestChange}
            selected={selectedContest}
            disabled={props.uploading}
          />
          <SelectMenu
            header={<FormattedMessage {...messages.problem} />}
            options={props.problems}
            primary={(problem) => problem.shortcode}
            secondary={(problem) => problem.name}
            onChange={props.onProblemChange}
            selected={selectedProblem}
            empty={<FormattedMessage {...problemMessages.empty} />}
            disabled={props.uploading}
          />
          <DialogContentText><FormattedMessage {...messages.files} /></DialogContentText>
          <input type="file" name="file0" disabled={props.uploading} onChange={props.onInputChange} />
          <input type="file" name="file1" disabled={props.uploading} onChange={props.onInputChange} />
          <input type="file" name="file2" disabled={props.uploading} onChange={props.onInputChange} />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            primary
            disabled={!props.submittable || props.uploading}
          >
            <FormattedMessage {...messages.submit} />
          </Button>
          <Button onClick={props.onCancel}><FormattedMessage {...messages.cancel} /></Button>
        </DialogActions>
      </form>
    </Layout>
  );
}

export const ContestsPropType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}));

export const ProblemsPropType = PropTypes.arrayOf(PropTypes.shape({
  shortcode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}));

SubmitModal.propTypes = {
  contests: ContestsPropType,
  problems: ProblemsPropType,
  uploading: PropTypes.bool.isRequired,
  submittable: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onContestChange: PropTypes.func,
  onProblemChange: PropTypes.func,
};


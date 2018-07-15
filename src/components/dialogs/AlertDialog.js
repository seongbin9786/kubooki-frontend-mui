import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import ResponsiveDialog from './ResponsiveDialog';

function AlertDialog({ open, title, content, okText, notOkText, handleOk, handleNotOk, onClose }) {
  return (
    <ResponsiveDialog
      open={open}
      handleClose={onClose}
      title={title}
    >
      <DialogContent>
        <DialogContentText>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNotOk} color="primary">
          {notOkText}
        </Button>
        <Button onClick={handleOk} color="primary" autoFocus>
          {okText}
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
}

export default AlertDialog;
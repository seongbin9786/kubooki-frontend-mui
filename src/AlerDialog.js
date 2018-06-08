import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AlertDialog({ open, title, content, okText, notOkText, handleOk, handleNotOk, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
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
    </Dialog>
  );
}

export default AlertDialog;
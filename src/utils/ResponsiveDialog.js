import React from 'react';
import injectSheet from 'react-jss';
import { withWidth, Dialog, AppBar, Toolbar, IconButton, Typography, Button, DialogTitle, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import AutoFocusDialog from './dialogs/AutoFocusDialog';

const styles = {
  appBar: {
    position: 'relative',
    marginBottom: 20,
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ResponsiveDialog extends AutoFocusDialog {
  render() {
    const { classes, width, open, title, handleClose, children, confirmation, showAppbar } = this.props;
    const isMobile = width === 'xs';

    return isMobile ?
      (
        <Dialog
          open={open}
          fullScreen
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          {showAppbar &&
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton color="inherit" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.flex}>
                  {title}
                </Typography>
                <Button color="inherit" onClick={handleClose}>
                  닫기
                </Button>
              </Toolbar>
            </AppBar>
          }
          {children}
        </Dialog>
      )
      :
      (
        <Dialog
          open={open}
          fullWidth
          maxWidth='sm'
          onClose={handleClose}
          disableBackdropClick={confirmation}
          disableEscapeKeyDown={confirmation}
        >
          <DialogTitle>{title}</DialogTitle>
          {children}
        </Dialog >
      );
  }
}

export default injectSheet(styles)(withWidth()(ResponsiveDialog));
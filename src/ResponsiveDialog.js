import React from 'react';
import injectSheet from 'react-jss';
import { withWidth, Dialog, AppBar, Toolbar, IconButton, Typography, Button, DialogTitle, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

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

function ResponsiveDialog({ classes, width, title, handleClose, children, ...props }) {
  const isMobile = width === 'xs';

  return isMobile ?
    (
      <Dialog
        fullScreen
        onClose={handleClose}
        TransitionComponent={Transition}
        {...props}
      >
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
        {children}
      </Dialog>
    )
    :
    (
      <Dialog
        fullWidth
        maxWidth='sm'
        onClose={handleClose}
        {...props}
      >
        <DialogTitle>{title}</DialogTitle>
        {children}
      </Dialog >
    );
}

export default injectSheet(styles)(withWidth()(ResponsiveDialog));
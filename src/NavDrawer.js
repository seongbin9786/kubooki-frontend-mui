import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

const mailFolderListItems = (
  <React.Fragment>
    <ListItem button>
      <ListItemIcon
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </ListItemIcon>
      <ListItemText primary="거북이" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="로그인" />
    </ListItem>
  </React.Fragment>
);

const otherMailFolderListItems = (
  <React.Fragment>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="알림 목록" />
    </ListItem>
  </React.Fragment>
);

const styles = {
  list: {
    width: 250,
  },
};

function NavDrawer({ classes, open, toggleDrawer }) {
  const sideList = (
    <div className={classes.list}>
      <List>{mailFolderListItems}</List>
      <Divider />
      <List>{otherMailFolderListItems}</List>
    </div>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(NavDrawer);

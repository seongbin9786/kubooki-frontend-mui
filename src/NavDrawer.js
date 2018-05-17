import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import { FamilyLinks } from './FamilyLinkConfig';

const styles = {
  list: {
    width: 250,
  },
};

function NavDrawer({ classes, open, toggleDrawer, toggleLogin, toggleRegister }) {
  const families = FamilyLinks.map((link, index) =>
    <ListItem button key={index}>
      <ListItemIcon>
        <i className="fas fa-lg fa-graduation-cap"></i>
      </ListItemIcon>
      <ListItemText primary={link} />
    </ListItem>
  );

  const sideList = (
    <React.Fragment>
      <ListItem button>
        <ListItemIcon aria-label="Menu">
          <i className="fas fa-lg fa-bars"></i>
        </ListItemIcon>
        <ListItemText primary="거북이" />
      </ListItem>

      <Divider />

      <ListItem
        button
        onClick={toggleLogin}
      >
        <ListItemIcon>
          <i className="fas fa-lg fa-user-plus"></i>
        </ListItemIcon>
        <ListItemText primary="로그인" />
      </ListItem>

      <ListItem
        button
        onClick={toggleRegister}
      >
        <ListItemIcon>
          <i className="fas fa-lg fa-sign-in-alt"></i>
        </ListItemIcon>
        <ListItemText primary="회원가입" />
      </ListItem>

      <Divider />

      <ListItem button>
        <ListItemIcon>
          <i className="fas fa-lg fa-calendar-alt"></i>
        </ListItemIcon>
        <ListItemText primary="이벤트" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <i className="fas fa-lg fa-question-circle"></i>
        </ListItemIcon>
        <ListItemText primary="FAQ" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <i className="fas fa-lg fa-pencil-alt"></i>
        </ListItemIcon>
        <ListItemText primary="수습기자 지원" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <i className="fas fa-lg fa-handshake"></i>
        </ListItemIcon>
        <ListItemText primary="이용 약관" />
      </ListItem>
    </React.Fragment>
  );

  const settings = (
    <ListItem button>
      <ListItemIcon>
        <i className="fas fa-lg fa-cogs"></i>
      </ListItemIcon>
      <ListItemText primary="설정" />
    </ListItem>
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
          <div className={classes.list}>
            <List>
              {sideList}
              <Divider />
              {families}
              <Divider />
              {settings}
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(NavDrawer);

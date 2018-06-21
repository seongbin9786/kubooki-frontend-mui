import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { withWidth } from '@material-ui/core';
import { FamilyLinks } from './FamilyLinkConfig';
import { logo, settings, accountList, guestList, userList, journalistGroupList } from './NavDrawerConfig';
import SearchBar from './SearchBar';
import FaIcon from './FaIcon';

const styles = {
  list: ({ width }) => ({
    width: width === 'xs' ? 190 : 250,
  }),
};

function NavDrawer({
  classes,
  history,
  open,
  user,
  handleOpen,
  handleDrawer
}) {
  const renderMenus = (menus, title) => (
    <List key={title} subheader={<ListSubheader disableSticky>{title}</ListSubheader>}>
      {menus.map(({ link, icon, name, toggle }) => (
        <ListItem key={name} button onClick={toggle ? (typeof toggle === 'function' ? toggle : handleOpen(toggle)) : () => history.push(link)}>
          <ListItemIcon>
            <FaIcon icon={icon} />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
      <Divider />
    </List>
  );

  const families = renderMenus(
    FamilyLinks.map(([name, link]) => {
      return {
        toggle: () => window.location = link,
        icon: 'lg-graduation-cap',
        name,
      };
    }),
    '패밀리 사이트'
  );

  return (
    <div>
      <Drawer open={open} onClose={handleDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={handleDrawer}
        >
          <div className={classes.list}>
            <SearchBar fullWidth />
            {renderMenus(logo, '메인')}
            {user.is('GUEST') && renderMenus(accountList, '인증')}
            {renderMenus(guestList, '거북이')}
            {user.is('USER') && renderMenus(userList, '개인화')}
            {user.isJournalistGroup() && renderMenus(journalistGroupList, '기자')}
            {families}
            {renderMenus(settings, '설정')}
          </div>
        </div>
      </Drawer>
    </div >
  );
}

export default compose(withWidth(), injectSheet(styles))(withRouter(NavDrawer));

import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { withWidth, AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import NavDrawer from './NavDrawer';
import LoginDialog from '../components/dialogs/LoginDialog';
import RegisterDialog from '../components/dialogs/RegisterDialog';
import SettingsDialog from '../components/dialogs/SettingsDialog';
import NewsReportDialog from '../components/dialogs/NewsReportDialog';
import Spacing from '../styles/Spacing';
import personalMenuList from '../configs/MyPageTabConfig';
import DialogOwnerComponent from '../utils/DialogOwnerComponent';
import InconvenienceReportDialog from '../components/dialogs/InconvenienceReportDialog';

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    color: 'white',
  },
  toolbar: ({ width }) => ({
    minHeight: 'auto',
    height: width === 'xs' ? 56 : 64,
  }),
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
  },
  menus: {
    marginTop: 35,
  }
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

class Header extends DialogOwnerComponent {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: {
        login: false,
        register: false,
        settings: false,
        reportNews: false,
        reportInconveniences: false,
      },

      drawer: false,

      menusParentEl: null,

      loggedIn: props.user.isLoggedIn(),
    };
  }

  handleAvatarClick = ({ currentTarget }) => this.setState({ menusParentEl: currentTarget });

  handleMenuClose = () => this.setState({ menusParentEl: null });

  handleMenuClick = link => () => {
    const { history } = this.props;

    this.handleMenuClose();
    history.push(link);
  }

  //TODO: 로그아웃 구현
  handleLogout = () => this.handleMenuClose();

  handleOpen = open => () => this.setState({ [open]: !this.state[open] });

  handleLoginSubmit = data => { }
  handleRegisterSubmit = data => { }
  handleNewsReportSubmit = data => { }
  handleInconvenienceReportSubmit = data => { }

  render() {
    const { classes, width, user } = this.props;
    const { dialogOpen: { login, register, settings, reportNews, reportInconveniences }, drawer, menusParentEl, loggedIn } = this.state;
    const isMobile = width === 'xs';
    const menus = Boolean(menusParentEl);

    return (
      <React.Fragment>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleOpen('drawer')}
            >
              <MenuIcon />
            </IconButton>
            <NavDrawer
              user={user}
              open={drawer}
              handleOpen={this.toggleDialog}
              handleDrawer={this.handleOpen('drawer')}
            />
            <Typography
              color="inherit"
              className={classes.flex}
              onClick={scrollToTop}
              variant={isMobile && !loggedIn ? 'subheading' : 'title'}
            >
              경기대학교 웹지거북이
            </Typography>
            {login && <LoginDialog
              open={login}
              handleClose={this.toggleDialog('login')}
              onRegisterClick={this.toggleDialog('register')}
              onSubmit={this.handleLoginSubmit}
            />}
            {register && <RegisterDialog
              open={register}
              handleClose={this.toggleDialog('register')}
              onSubmit={this.handleRegisterSubmit}
            />}
            {reportNews && <NewsReportDialog
              open={reportNews}
              handleClose={this.toggleDialog('reportNews')}
              onSubmit={this.handleNewsReportSubmit}
            />}
            {reportInconveniences && <InconvenienceReportDialog
              open={reportInconveniences}
              handleClose={this.toggleDialog('reportInconveniences')}
              onSubmit={this.handleInconvenienceReportSubmit}
            />}
            {settings && <SettingsDialog
              open={settings}
              handleClose={this.toggleDialog('settings')}
            />}
            {loggedIn ?
              <div
                className={classes.avatar}
                onClick={this.handleAvatarClick}
              >
                <Avatar alt={user.getName()} src={user.getProfilePic()} />
              </div>
              : <Button
                color="inherit"
                onClick={this.toggleDialog('login')}
              >
                로그인
              </Button>
            }
            {menus &&
              <Menu
                className={classes.menus}
                anchorEl={menusParentEl}
                open={menus}
                onClose={this.handleMenuClose}
              >
                {personalMenuList.map(([name, link], index) =>
                  <MenuItem onClick={this.handleMenuClick(link)}>{name}</MenuItem>
                )}
                <MenuItem onClick={this.handleLogout}>로그아웃</MenuItem>
              </Menu>
            }
          </Toolbar>
        </AppBar>
        <Spacing height={isMobile ? 56 : 64} />
      </React.Fragment>
    );
  }
}

export default compose(withWidth(), injectSheet(styles))(withRouter(Header));

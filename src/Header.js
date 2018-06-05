import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';

import NavDrawer from './NavDrawer';
import LoginDialog from './LoginDialog';
import RegisterDialog from './RegisterDialog';
import SettingsDialog from './SettingsDialog';
import Spacing from './Spacing';

import personalMenuList from './MyPageTabConfig';

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  },
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

class ButtonAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer: false,
      login: false,
      register: false,
      settings: false,
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

  handleLoginSubmit = data => {
    //TODO: 로그인 버튼을 누를 때
  }

  handleRegisterSubmit = data => {
    //TODO: 회원가입 버튼을 누를 때
  }

  render() {
    const { classes, width, user } = this.props;
    const { drawer, login, register, settings, menusParentEl, loggedIn } = this.state;
    const menus = Boolean(menusParentEl);
    console.log(menusParentEl, menus);

    return (
      <React.Fragment>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
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
              toggleDrawer={this.handleOpen('drawer')}
              toggleLogin={this.handleOpen('login')}
              toggleRegister={this.handleOpen('register')}
              toggleSettings={this.handleOpen('settings')}
            />
            <Typography variant="title" color="inherit" className={classes.flex}>
              경기대학교 웹지거북이
            </Typography>
            {login ?
              <LoginDialog
                open={login}
                handleClose={this.handleOpen('login')}
                onRegisterClick={this.handleOpen('register')}
                onSubmit={this.handleLoginSubmit}
              /> : null
            }
            {register ?
              <RegisterDialog
                open={register}
                handleClose={this.handleOpen('register')}
                onSubmit={this.handleRegisterSubmit}
              />
              : null
            }
            {settings ?
              <SettingsDialog
                open={settings}
                handleClose={this.handleOpen('settings')}
              />
              : null
            }
            {loggedIn ?
              <div
                className={classes.avatar}
                onClick={this.handleAvatarClick}
              >
                <Avatar alt={user.getName()} src={user.getProfilePic()} />
              </div>
              : <Button
                color="inherit"
                onClick={this.handleOpen('login')}
              >
                로그인
              </Button>
            }
            {menus ?
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
              : null
            }
          </Toolbar>
        </AppBar>
        <Spacing height={width === 'xs' ? 56 : 64} />
      </React.Fragment>
    );
  }
}

export default compose(withStyles(styles), withWidth())(withRouter(ButtonAppBar));

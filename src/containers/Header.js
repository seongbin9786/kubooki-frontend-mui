import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { withWidth, AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Register from '../modules/Register';
import NavDrawer from './NavDrawer';
import LoginDialog from '../components/dialogs/LoginDialog';
import RegisterDialog from '../components/dialogs/RegisterDialog';
import SettingsDialog from '../components/dialogs/SettingsDialog';
import NewsReportDialog from '../components/dialogs/NewsReportDialog';
import Spacing from '../styles/Spacing';
import personalMenuList from '../configs/MyPageTabConfig';
import DialogOwnerComponent from '../utils/DialogOwnerComponent';
import InconvenienceReportDialog from '../components/dialogs/InconvenienceReportDialog';
import SocialRegisterDialog from '../components/dialogs/SocialRegisterDialog';

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
        registerSocial: false,
        settings: false,
        reportNews: false,
        reportInconveniences: false,
      },
      drawer: false,
      menusParentEl: null,
    };
  }

  handleAvatarClick = ({ currentTarget }) => this.setState({ menusParentEl: currentTarget });

  handleMenuClose = () => this.setState({ menusParentEl: null });

  handleMenuClick = link => () => {
    const { history } = this.props;

    this.handleMenuClose();
    history.push(link);
  }

  handleOpen = open => () => this.setState({ [open]: !this.state[open] });

  handleLoginSubmit = input => {
    this.props.handleLocalLogin(input)
      .then(() => this.toggleDialog('login')())
      .catch(() => alert('로그인에 실패하였습니다.'));
  }

  handleSocialLoginSubmit = type => () => {
    this.props.handleSocialLogin(type)
      .then(() => this.toggleDialog('login')())
      .catch(({ status, type, accessToken, msg }) => {
        if (status === 404) {
          const agreeToRegister = window.confirm(msg);
          if (agreeToRegister) {
            this.toggleDialog('login')();
            this.createHandleSocialRegisterSubmit(type, accessToken);
            this.toggleDialog('registerSocial')();
          }
        }
      });
  }

  createHandleSocialRegisterSubmit = (type, accessToken) => {
    this.handleSocialRegisterSubmit = data => {
      Register.registerSocial(type, accessToken, data)
        .then(msg => {
          alert(msg);
          this.toggleDialog('registerSocial')();
        })
        .catch(msg => alert(msg));
    };
    console.log(this.handleSocialRegisterSubmit);
  }

  handleLogout = () => {
    this.props.handleLogout();
    this.handleMenuClose();
  }

  handleLocalRegisterSubmit = data => {
    Register.registerLocal(data)
      .then(({ id }) => {
        alert(`${id}로 회원가입이 완료되었습니다.`);
        this.toggleDialog('register')();
      })
      .catch(msg => alert(msg));
  }

  handleSocialRegisterSubmit = f => f;

  handleNewsReportSubmit = data => {
    console.log(data);
  }

  handleInconvenienceReportSubmit = data => {
    console.log(data);
  }

  render() {
    const { classes, width, userInfo, isLoggedIn } = this.props;
    const { dialogOpen: { login, register, registerSocial, settings, reportNews, reportInconveniences }, drawer, menusParentEl } = this.state;
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
              open={drawer}
              handleOpen={this.toggleDialog}
              handleDrawer={this.handleOpen('drawer')}
            />
            <Typography
              color="inherit"
              className={classes.flex}
              onClick={scrollToTop}
              variant={isMobile && !isLoggedIn ? 'subheading' : 'title'}
            >
              경기대학교 웹지거북이
            </Typography>
            {login && <LoginDialog
              open={login}
              handleClose={this.toggleDialog('login')}
              onRegisterClick={this.toggleDialog('register')}
              onSubmit={this.handleLoginSubmit}
              handleSocialLogin={this.handleSocialLoginSubmit}
            />}
            {register && <RegisterDialog
              open={register}
              handleClose={this.toggleDialog('register')}
              onSubmit={this.handleLocalRegisterSubmit}
            />}
            {registerSocial && <SocialRegisterDialog
              open={registerSocial}
              handleClose={this.toggleDialog('registerSocial')}
              onSubmit={this.handleSocialRegisterSubmit}
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
            {isLoggedIn ?
              <div
                className={classes.avatar}
                onClick={this.handleAvatarClick}
              >
                <Avatar
                  alt={userInfo.name}
                  src='https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg'
                />
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
                {personalMenuList.map(([name, link]) =>
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

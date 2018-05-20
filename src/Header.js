import React, { Component } from 'react';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavDrawer from './NavDrawer';
import LoginDialog from './LoginDialog';
import RegisterDialog from './RegisterDialog';

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
};

class ButtonAppBar extends Component {
  state = {
    drawer: false,
    login: false,
    register: false,
  }

  handleOpen = open => () => this.setState({ [open]: !this.state[open] });

  handleLoginSubmit = data => {
    //TODO: 로그인 버튼을 누를 때
  }

  handleRegisterSubmit = data => {
    //TODO: 회원가입 버튼을 누를 때
  }

  render() {
    const { classes, width } = this.props;
    const { drawer, login, register } = this.state;

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
              open={drawer}
              toggleDrawer={this.handleOpen('drawer')}
              toggleLogin={this.handleOpen('login')}
              toggleRegister={this.handleOpen('register')}
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
            <Button
              color="inherit"
              onClick={this.handleOpen('login')}
            >
              로그인
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ height: width === 'xs' ? 56 : 64 }} />
      </React.Fragment>
    );
  }
}

export default compose(withStyles(styles), withWidth())(ButtonAppBar);

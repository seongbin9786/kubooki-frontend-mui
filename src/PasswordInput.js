import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    margin: [theme.spacing.unit, 0],
    width: '100%'
  },
  inputPassword: {
    fontFamily: '\'Malgun Gothic\', sans-serif',
    font: 'small-caption'
  }
});

class InputAdornments extends React.Component {
  state = {
    password: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes, id, label } = this.props;
    const { password, showPassword } = this.state;

    return (
      <div className={classes.root}>
        <FormControl className={classes.textField}>
          <InputLabel>{label}</InputLabel>
          <Input
            id={id}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            className={classes.inputPassword}
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(InputAdornments);
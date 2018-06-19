import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import ListSubheader from '@material-ui/core/ListSubheader';

import SETTINGS_CONFIG from './SettingsConfig';
import ResponsiveDialog from './ResponsiveDialog';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends Component {
  state = {
    checked: ['wifi'],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes, open, handleClose } = this.props;
    const { checked } = this.state;

    return (
      <ResponsiveDialog
        title='설정'
        open={open}
        handleClose={handleClose}
      >
        {SETTINGS_CONFIG.map((config, idx) => {
          const { level, subHeader, options } = config;
          //TODO: level 체크
          return (
            <List subheader={<ListSubheader disableSticky>{subHeader}</ListSubheader>} key={idx}>
              {options.map(([name, state]) => (
                <React.Fragment key={name}>
                  <ListItem button>
                    <ListItemText primary={name} secondary={checked.indexOf(state) !== -1 ? 'ON' : 'OFF'} />
                    <ListItemSecondaryAction>
                      <Switch
                        onChange={this.handleToggle(state)}
                        checked={checked.indexOf(state) !== -1}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))
              }
            </List>
          );
        })}
      </ResponsiveDialog>
    );
  }
}

export default withStyles(styles)(FullScreenDialog);
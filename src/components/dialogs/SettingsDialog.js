import React, { Component } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import ListSubheader from '@material-ui/core/ListSubheader';

import SETTINGS_CONFIG from '../../configs/SettingsConfig';
import ResponsiveDialog from '../../utils/ResponsiveDialog';

class FullScreenDialog extends Component {
  state = {
    checked: [],
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
    const { open, handleClose } = this.props;
    const { checked } = this.state;

    return (
      <ResponsiveDialog
        title='설정'
        open={open}
        handleClose={handleClose}
        showAppbar
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

export default FullScreenDialog;
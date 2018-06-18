import React, { Component } from 'react';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';

import QuillEditor from './QuillEditor';

class AbstractDetail extends Component {

  handleChange = inputName => ({ target: { value } }) => this.setState({ [inputName]: value });

  handleQuillChange = value => this.setState({ content: value });

  renderField(field) {
    const { state } = this;
    const { classes } = this.props;
    const {
      label, name, value, onChange,
      show = true,
      disabled = false,
      shrink = false,
      Component = TextField,
      type = 'text',
      className = 'marginOneUnit',
    } = field;

    if (typeof show === 'function' && !show(state)) return;

    if (type === 'checkbox') {
      return (
        <FormControlLabel
          label={label}
          name={name}
          key={name}
          control={
            <Checkbox
              checked={value ? value(state) : this.state[name]}
              value={value ? value(state) : this.state[name]}
              disabled={typeof disabled === 'function' ? disabled(state) : disabled}
            />
          }
        />
      );
    }

    if (Component === QuillEditor) {
      return (
        <Component
          type={type}
          label={label}
          name={name}
          key={name}
          value={value ? value(state) : this.state[name]}
          onChange={typeof onChange === 'function' ? onChange(this) : this.handleChange(name)}
          className={classes[className]}
          disabled={typeof disabled === 'function' ? disabled(state) : disabled}
        />
      );
    }

    return (
      <Component
        type={type}
        label={label}
        name={name}
        key={name}
        value={value ? value(state) : this.state[name]}
        onChange={typeof onChange === 'function' ? onChange(this) : this.handleChange(name)}
        className={classes[className]}
        disabled={typeof disabled === 'function' ? disabled(state) : disabled}

        // QuilEditor에서는 받아들이지 못함
        InputLabelProps={shrink ? { shrink: true } : null}
        fullWidth
      />
    );
  }
}

export default AbstractDetail;
import React, { Component } from 'react';
import { TextField, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import QuillEditor from '../components/inputs/QuillEditor';
import ImagePreview from '../components/inputs/ImagePreview';

class FormComponent extends Component {
  handleChange = inputName => ({ target: { value } }) => this.setState({ [inputName]: value });

  handleQuillChange = name => value => this.setState({ [name]: value });

  handleCheckboxChange = name => event => this.setState({ [name]: event.target.checked });

  renderField(field) {
    const { state } = this;
    const { classes } = this.props;
    const {
      label, name, value, onChange, className, menuList,
      show = true,
      disabled = false,
      shrink = false,
      Component = TextField,
      type = 'text',
      ...props,
    } = field;

    if (typeof show === 'function' && !show(state, props)) return;

    const onChangeFunc = typeof onChange === 'function' ? onChange(this) : this.handleChange(name);
    const disabledFunc = typeof disabled === 'function' ? disabled(state, props) : disabled;
    const valueFunc = value ? (typeof value !== 'function' ? value : value(state, props)) : this.state[name];
    const classNameFunc = className ? classes[className] : null;

    if (type === 'checkbox') {
      return (
        <FormControlLabel
          className={classNameFunc}
          label={label}
          name={name}
          key={name}
          control={
            <Checkbox
              checked={valueFunc}
              value={name}
              disabled={disabledFunc}
              onChange={this.handleCheckboxChange(name)}
            />
          }
        />
      );
    }

    if (type === 'select') {
      return (
        <FormControl
          fullWidth
          className={classNameFunc}
          margin='dense'
          key={name}
        >
          <InputLabel>{label}</InputLabel>
          <Select
            name={name}
            value={valueFunc}
            onChange={onChangeFunc}
          >
            <MenuItem value=""><em>선택해주세요...</em></MenuItem>
            {menuList.map(([value, name]) => <MenuItem value={value} key={value}>{name}</MenuItem>)}
          </Select>
        </FormControl>
      );
    }

    if (Component === ImagePreview) {
      return (
        <Component
          label={label}
          name={name}
          key={name}
          value={valueFunc}
          {...props}
        />
      );
    }

    if (Component === 'quill') {
      return (
        <QuillEditor
          type={type}
          label={label}
          name={name}
          key={name}
          value={valueFunc}
          onChange={this.handleQuillChange(name)}
          className={classNameFunc}
          disabled={disabledFunc}
        />
      );
    }

    return (
      <Component
        type={type}
        label={label}
        name={name}
        key={name}
        value={valueFunc}
        onChange={onChangeFunc}
        className={classNameFunc}
        disabled={disabledFunc}

        // QuilEditor에서는 받아들이지 못함
        InputLabelProps={shrink ? { shrink: true } : null}
        fullWidth
      />
    );
  }
}

export default FormComponent;
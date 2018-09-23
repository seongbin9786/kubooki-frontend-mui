import React, { Component } from 'react';
import { TextField, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

import QuillEditor from '../components/inputs/QuillEditor';
import ImagePreview from '../components/inputs/ImagePreview';

class FormComponent extends Component {
  handleChange = inputName => ({ target: { value } }) => this.setState({ [inputName]: value });

  handleQuillChange = name => value => this.setState({ [name]: value });

  handleCheckboxChange = name => event => this.setState({ [name]: event.target.checked });

  /**
   * 필드 입력값의 최소 길이를 검증한다.
   * 
   * @param {string} name 대상 필드 이름
   * @param {number} minLength 최소 길이
   */
  validateByMinLength = (name, minLength) => val => val.length < minLength ? ({ error: true, msg: `${name}은(는) ${minLength}자 이상이어야 합니다.` }) : ({ error: false, msg: '' });

  validateNotNull = val => val === '' || val === 0 || Boolean(val) === false ? ({ error: true, msg: '반드시 입력하여야 합니다.' }) : ({ error: false, msg: '' });

  /**
   * validate 함수가 정의되지 않은 경우 기본값으로 사용되는 함수이다.
   */
  defaultValidate = () => ({ error: false, msg: '' });

  /**
   * 필드의 배열을 렌더링한다.
   * 
   * @param {array} fields 
   */
  renderFields(fields) {
    return fields.map(field => this.renderField(field));
  }

  /**
   * 필드를 렌더링한다.
   * 
   * @param {object} field 필드
   * @returns {array} [{ error, msg, Component }, { error, msg, Component }, ... ] 배열을 반환한다.
   */
  renderField(field) {
    const { state, props } = this;
    const { classes } = this.props;
    const {
      label, name, value, onChange, className, menuList,
      show = true,
      disabled = false,
      shrink = false,
      Component = TextField,
      type = 'text',
      validate = this.defaultValidate,
      ..._props,
    } = field;

    if (typeof show === 'function' && !show(state, props)) return;
    if (!show) return;

    const onChangeFunc = typeof onChange === 'function' ? onChange(this) : this.handleChange(name);
    const disabledFunc = typeof disabled === 'function' ? disabled(state, props) : disabled;
    const valueFunc = value ? (typeof value !== 'function' ? value : value(state, props)) : this.state[name];
    const classNameFunc = className ? classes[className] : null;

    // validation
    const { error, msg } = validate(valueFunc) || ({ error: false, msg: '' });

    // 체크 박스는 흠.. 이게 되나?
    if (type === 'checkbox') {
      return {
        error,
        msg,
        component:
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
      };
    }

    if (type === 'select') {
      return {
        error,
        msg,
        component:
          <FormControl
            fullWidth
            className={classNameFunc}
            margin='dense'
            key={name}
            error={error}
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
            {error && <FormHelperText>{msg}</FormHelperText>}
          </FormControl>
      };
    }

    if (Component === ImagePreview) {
      return {
        error,
        msg,
        component:
          <Component
            label={label}
            name={name}
            key={name}
            value={valueFunc}
            {..._props}
          />
      };
    }

    if (Component === 'quill') {
      return {
        error,
        msg,
        component:
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
      };
    }

    return {
      error,
      msg,
      component:
        <Component
          type={type}
          label={label}
          name={name}
          key={name}
          value={valueFunc}
          onChange={onChangeFunc}
          className={classNameFunc}
          disabled={disabledFunc}

          // Validation의 결과가 나오는 곳. TextField의 경우에만 일단 출력함
          error={error}
          helperText={msg}

          // QuilEditor에서는 받아들이지 못함
          InputLabelProps={shrink ? { shrink: true } : null}
          fullWidth
        />
    };
  }
}

export default FormComponent;
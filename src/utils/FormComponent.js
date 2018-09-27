import React, { Component } from 'react';
import { TextField, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

import QuillEditor from '../components/inputs/QuillEditor';
import ImagePreview from '../components/inputs/ImagePreview';

class FormComponent extends Component {

  componentDidMount() {
    console.log('cdm!');

    const fieldDefinitions = this.getFieldDefinitions();

    this.initializeFields(fieldDefinitions);
  }

  /**
   * 필드 정의를 기반으로 필드에 실제로 필요한 state 구조를 구축한다.
   * 폼 사용 시 최소 1회는 호출되어야 한다.
   * 기본값으로 componentDidMount에서 호출되고 있다.
   * 
   * @param {object} fieldDefinitions 
   */
  initializeFields(fieldDefinitions) {

    console.log('fieldDefinitions: ', fieldDefinitions);

    if (!fieldDefinitions) throw Error('필드 정의가 없습니다.');

    const fields = this.createFieldsByDefinitions(fieldDefinitions);

    this.setState({ fields });

    console.log('fields: ', fields);
  }

  /**
   * 필드들을 정의한 객체를 받아 state를 초기화한다.
   */
  createFieldsByDefinitions(fieldDefinitions) {

    let fields = {};

    for (let name in fieldDefinitions) {

      fields[name] = {

        /* 기본 값 */
        error: false,
        msg: '',
        show: true,
        disabled: false,
        shrink: false,
        value: '',
        type: 'text',
        Component: TextField,
        name,
        validate: () => ({ error: false, msg: '' }),

        /* field 정의했던 값으로 override */
        /* label, validate 등은 기본값이 없음 */
        ...fieldDefinitions[name],
      };
    }

    return fields;
  }

  /**
   * 필드명에 해당하는 validate 함수를 가져와 필드값을 검증한다.
   * 검증 결과의 error, msg 값으로 state를 갱신한다.
   * 
   * @param {string} name 필드명
   * @param {any} value 필드값
   */
  validateField = (name, value) => {
    const { fields } = this.state;
    const { validate } = fields[name];

    // 여기서 validate가 Promise를 반환하는 경우와 아닌 경우를 분리하면 됨
    // Promise인 경우 callback으로 updateFieldErrorState를 전달하면 됨!
    const result = validate(value);
    let error, msg;

    if (typeof result.then === 'function') { // Promise임
      result.then(
        ({ error, msg }) => {
          error = error;
          msg = msg;

          console.log('Async Validate:', name, error, msg);
          this.updateFieldErrorState(name, error, msg);
        }
      );
    } else {
      error = result.error;
      msg = result.msg;

      console.log('Sync Validate:', name, error, msg);
      this.updateFieldErrorState(name, error, msg);
    }
  }

  /**
   * 필드의 오류 상태를 갱신한다.
   * 
   * @param {string} name 필드명
   * @param {boolean} error 오류 여부
   * @param {string} msg 오류 메시지
   */
  updateFieldErrorState = (name, error, msg) => {
    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          error,
          msg
        }
      }
    }));
  }

  /**
   * 필드의 값을 갱신한다.
   * 
   * @param {string} name 필드명
   * @param {any} value 필드값
   */
  updateFieldValue = (name, value) => {
    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          value
        }
      }
    }));

    this.validateField(name, value);

    console.log('state changed: ', this.state);
  }

  handleChange = name => ({ target: { value } }) => this.updateFieldValue(name, value);

  handleQuillChange = name => value => this.updateFieldValue(name, value);

  handleCheckboxChange = name => ({ target: { checked } }) => this.updateFieldValue(name, checked);

  /**
   * 필드 입력값의 최소 길이를 검증한다.
   * 
   * @param {string} name 대상 필드 이름
   * @param {number} minLength 최소 길이
   */
  validateByMinLength = (name, minLength) => val => val.length < minLength ? ({ error: true, msg: `${name}은(는) ${minLength}자 이상이어야 합니다.` }) : ({ error: false, msg: '' });

  validateNotNull = val => val === '' || val === 0 || Boolean(val) === false ? ({ error: true, msg: '반드시 입력하여야 합니다.' }) : ({ error: false, msg: '' });

  /**
   * 비동기 validate 함수 예제이다.
   * 실제로 사용되는 공통 validate 함수는 아니다.
   */
  validateAsyncExample = val => new Promise(resolve => {
    setTimeout(() => {
      resolve({ error: true, msg: 'Async Validated  With Value:' + val });
    }, 500);
  })

  /**
   * 전체 필드를 렌더링한다.
   */
  renderFields() {
    if (!this.state) return [];

    const { fields } = this.state;

    let renderedFields = [];

    let fieldName, renderedField;
    for (fieldName in fields) {
      renderedField = this.renderField(fields[fieldName]);
      renderedFields.push(renderedField);
    }

    console.log('renderedFields:', renderedFields);

    return renderedFields;
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
      // menuList는 options의 valueList임. 이름을 바꿔야 할 듯
      show, disabled, shrink, Component, type, validate, error, msg,

      ..._props,
      // 얜 뭐지? image와 관련이 있는 것 같은데...
      // 이미지 전용 prop 인듯

    } = field;

    if (typeof show === 'function' && !show(state, props)) return;
    if (!show) return;

    const onChangeFunc = typeof onChange === 'function' ? onChange(this) : this.handleChange(name);
    const disabledFunc = typeof disabled === 'function' ? disabled(state, props) : disabled;
    const valueFunc = value ? (typeof value !== 'function' ? value : value(state, props)) : value;
    const classNameFunc = className ? classes[className] : null;

    let component;

    if (type === 'checkbox') {
      component =
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
        />;
    } else if (type === 'select') {
      component =
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
        </FormControl>;
    } else if (Component === ImagePreview) {
      component =
        <Component
          label={label}
          name={name}
          key={name}
          value={valueFunc}
          {..._props}
        />;
    } else if (Component === 'quill') {
      component =
        <QuillEditor
          type={type}
          label={label}
          name={name}
          key={name}
          value={valueFunc}
          onChange={console.log(this.handleQuillChange(name)) || this.handleQuillChange(name)}
          className={classNameFunc}
          disabled={disabledFunc}
        />;
    } else {
      component =
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
        />;
    }

    return {
      error,
      msg,
      component
    };
  }

  getFieldValues = () => {
    let fieldValues = {};

    const { fields } = this.state;

    Object.keys(fields).forEach(fieldName => {
      fieldValues[fieldName] = fields[fieldName].value;
    });
    return fieldValues;
  }

  handleSubmit = () => {
    const { onSubmit } = this.props;

    const values = this.getFieldValues();

    onSubmit(values);
  }
}

export default FormComponent;
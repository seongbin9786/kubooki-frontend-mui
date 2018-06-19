import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ResponsiveDialog from './ResponsiveDialog';
import FormComponent from './FormComponent';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const textInputFields = [
  {
    label: '아이디',
    name: 'registerId',
  },
  {
    label: '비밀번호',
    type: 'password',
    name: 'password'
  },
  {
    label: '비밀번호 확인',
    type: 'passowrd',
    name: 'passwordAgain',
  },
  {
    label: '이름',
    name: 'name',
  }
];

export default withStyles(styles)(class extends FormComponent {
  state = {
    id: '',
    password: '',
    passwordAgain: '',
    name: '',
    college: '',
    identity: '',
  };

  componentDidMount() {
    setTimeout(() => document.getElementsByName('registerId')[0].focus(), 300);
  }

  render() {
    const { open, handleClose, onSubmit, classes } = this.props;
    const { college, identity } = this.state;

    return (
      <div>
        <ResponsiveDialog
          open={open}
          handleClose={handleClose}
          title='회원가입'
        >
          <DialogContent>
            {textInputFields.map(input => this.renderField(input))}
            <FormControl className={classes.formControl}>
              <InputLabel>소속대학(소속교직)</InputLabel>
              <Select
                name="college"
                value={college}
                onChange={this.handleChange('college')}
              >
                <MenuItem value=""><em>선택해주세요...</em></MenuItem>
                <MenuItem value="융합교양대학">융합교양대학</MenuItem>
                <MenuItem value="휴면인재융합대학">휴면인재융합대학</MenuItem>
                <MenuItem value="지식정보서비스대학">지식정보서비스대학</MenuItem>
                <MenuItem value="융합과학대학">융합과학대학</MenuItem>
                <MenuItem value="창의공과대학">창의공과대학</MenuItem>
                <MenuItem value="관광문화대학">관광문화대학</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>신분</InputLabel>
              <Select
                name="college"
                value={identity}
                onChange={this.handleChange('identity')}
              >
                <MenuItem value=""><em>선택해주세요...</em></MenuItem>
                <MenuItem value="학생">학생</MenuItem>
                <MenuItem value="교직원">교직원</MenuItem>
                <MenuItem value="학부모">학부모</MenuItem>
                <MenuItem value="기타">기타</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={onSubmit} color="primary" variant='raised'>
              회원가입
            </Button>
          </DialogActions>
        </ResponsiveDialog>
      </div>
    );
  }
});
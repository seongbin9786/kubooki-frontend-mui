import React from 'react';
import injectSheet from 'react-jss';
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
} from '@material-ui/core';
import ImagePreview from './ImagePreview';
import UploadBtn from './UploadBtn';
import FaIconBtn from './FaIconBtn';
import PasswordChangeForm from './PasswordChangeForm';
import { globalUser as user } from './store';
import FormComponent from './FormComponent';
import theme from './ThemeConfig';
import { smallRootWithPadding } from './styles';

const styles = {
  smallRootWithPadding,
  imgContainer: {
    marginBottom: 20,
  },
  uploadBtn: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 1 / 2,
  },
  title: {
    marginTop: 20,
    marginBottom: 0,
  }
};

class AccountSettingsPage extends FormComponent {
  state = {
    noTracking: false,
    profile: 'http://sba.scfhs.org.sa/publiceservice_enu/CustomPages/Profileuploader/static/images/default.jpg',
  };

  render() {
    const { classes } = this.props;
    const helloMsg = `안녕하세요 ${user.getName()}님`;

    return (
      <div className={classes.smallRootWithPadding}>
        <Typography variant='display1'>나의 계정 설정</Typography>

        <Typography variant='subheading' className={classes.title}>{helloMsg}</Typography>
        <br />

        <Divider />

        <Typography variant='headline' className={classes.title}>프로필사진</Typography>
        <div className={classes.imgContainer}>
          {this.renderField({
            Component: ImagePreview,
            label: '프로필 사진',
            name: 'profile',
            isCircle: true,
            person: true,
            size: 400,
          })}
          <UploadBtn btnStr='사진 업로드' color='primary' className={classes.uploadBtn} />
          <FaIconBtn variant='raised' color='secondary' btnStr='삭제' icon='trash' />
        </div>

        <Divider />

        <Typography variant='headline' className={classes.title}>개인정보수집</Typography>
        {this.renderField({
          label: '좋아한 기사, 내가 쓴 댓글 목록 수집하지 않기',
          type: 'checkbox',
          name: 'noTracking',
        })}

        <Divider />

        <Typography variant='headline' className={classes.title}>비밀번호 변경</Typography>
        <PasswordChangeForm />

      </div>
    );
  }
}

export default injectSheet(styles)(AccountSettingsPage);
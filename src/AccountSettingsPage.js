import React, { Component } from 'react';
import {
  withStyles,
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

const styles = theme => ({
  root: {
    margin: '0 auto',
    marginTop: 20,
    width: '50%',
    minWidth: 350,
    padding: '20px',
  },
  imgContainer: {
    marginBottom: 20,
  },
  uploadBtn: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 1 / 2,
    marginRight: theme.spacing.unit,
  },
  title: {
    marginTop: 20,
    marginBottom: 0,
  }
});

class AccountSettingsPage extends Component {
  state = {
    noTracking: false,
  };

  handleChange = ({ target: { checked } }) => this.setState({ noTracking: checked });

  render() {
    const { classes } = this.props;
    const { noTracking } = this.state;
    const helloMsg = `안녕하세요 ${user.getName()}님`;
    const personImg = 'http://sba.scfhs.org.sa/publiceservice_enu/CustomPages/Profileuploader/static/images/default.jpg';

    return (
      <div className={classes.root}>
        <Typography variant='display1'>나의 계정 설정</Typography>

        <Typography variant='subheading' className={classes.title}>{helloMsg}</Typography>
        <br />

        <Divider />

        <Typography variant='headline' className={classes.title}>프로필사진</Typography>
        <div className={classes.imgContainer}>
          <ImagePreview
            name='프로필 사진'
            value={personImg}
            isCircle
            person
            size={400}
          />
          <UploadBtn btnStr='사진 업로드' color='primary' className={classes.uploadBtn} />
          <FaIconBtn variant='raised' color='secondary' btnStr='삭제' type='trash' />
        </div>

        <Divider />

        <Typography variant='headline' className={classes.title}>개인정보수집</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={noTracking}
              onChange={this.handleChange}
              value="no-tracking"
              color="primary"
            />
          }
          label="좋아한 기사, 내가 쓴 댓글 목록 수집하지 않기"
        />

        <Divider />

        <Typography variant='headline' className={classes.title}>비밀번호 변경</Typography>
        <PasswordChangeForm />

        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(AccountSettingsPage);
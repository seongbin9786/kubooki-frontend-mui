import React, { Component } from 'react';
import { withStyles, TextField, Typography, Button } from '@material-ui/core';

import QuillEditor from './QuillEditor';
import DeleteIconBtn from './DeleteIconBtn';

const styles = theme => ({
  root: {
    // GridListTemplate 때문에
    marginTop: -80,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerBtn: {
    marginLeft: 8,
  },
  input: {
    margin: 8,
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    margin: 8,
  }
});

class PopupDetail extends Component {
  constructor(props) {
    super(props);

    const { popupDetail } = props;

    this.state = {
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      views: 0,
      likes: 0,
      noShowCount: 0,
      priority: -1,
      ...popupDetail,

      // 데이터가 들어오는 경우 수정모드
      editMode: Boolean(popupDetail),
    };
  }

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

  handleQuillChange = value =>
    this.setState({ content: value });

  render() {
    const { classes } = this.props;
    const { editMode, title, content, startDate, endDate, views, likes, noShowCount, priority } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant='display1'>팝업 관리 상세</Typography>
          {editMode ?
            <DeleteIconBtn className={classes.headerBtn} />
            : null}
        </div>

        {editMode ?
          <React.Fragment>
            <TextField
              label="조회수"
              type="number"
              value={views}
              onChange={this.handleChange('views')}
              className={classes.input}
              disabled
            />

            <TextField
              label="다시보지 않기 선택 수"
              type="number"
              value={noShowCount}
              onChange={this.handleChange('noShowCount')}
              className={classes.input}
              disabled
            />

            <TextField
              label="좋아요"
              type="number"
              value={likes}
              onChange={this.handleChange('likes')}
              className={classes.input}
              disabled
            />
          </React.Fragment>
          : null
        }

        <br />

        <TextField
          id='priortiy'
          label="우선순위"
          type="number"
          value={priority}
          onChange={this.handleChange('priority')}
          className={classes.input}
        />

        <TextField
          id="title"
          name="title"
          label="제목"
          value={title}
          onChange={this.handleChange('title')}
          type="text"
          fullWidth
          className={classes.input}
        />

        <TextField
          id="startDate"
          label="시작날짜"
          type="date"
          value={startDate}
          onChange={this.handleChange('startDate')}
          className={classes.input}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="endDate"
          label="종료날짜"
          type="date"
          value={endDate}
          onChange={this.handleChange('endDate')}
          className={classes.input}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <QuillEditor
          value={content}
          onChange={this.handleQuillChange}
          className={classes.input}
        />

        <div className={classes.btnGroup}>
          <Button color="primary" className={classes.btn}>
            취소
          </Button>
          <Button color="primary" variant='raised' className={classes.btn}>
            수정
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PopupDetail);
import React, { Component } from 'react';
import { withStyles, TextField, Typography, Button, Grid, ListItem, List, Avatar, Divider } from '@material-ui/core';

import QuillEditor from './QuillEditor';
import DeleteIconBtn from './DeleteIconBtn';
import AddIconBtn from './AddIconBtn';

const styles = {
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
  },
  grid: {
    padding: 8,
  },
  title: {
    marginBottom: 4,
  },
  listContainer: {
    border: '1px solid lightgray',
    borderRadius: 5,
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: 8,
  },
  awardBtn: {
    margin: 8,
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  eventAnswer: {
    padding: 8,
  },
  eventParticipantAddBtn: {
    marginBottom: 4,
  }
};

class EventDetail extends Component {
  constructor(props) {
    super(props);

    const { eventDetail } = props;

    this.state = {
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      views: 0,
      likes: 0,
      noShowCount: 0,
      priority: -1,
      currentParticipant: 1,
      ...eventDetail,

      // 데이터가 들어오는 경우 수정모드
      editMode: Boolean(eventDetail),
    };
  }

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

  handleQuillChange = value =>
    this.setState({ content: value });

  render() {
    const { classes } = this.props;
    const { editMode, title, content, startDate, endDate, resultDate, views, likes, prize, participants, currentParticipant } = this.state;
    const { name, date, answers } = participants[currentParticipant];

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant='display1'>이벤트 관리 상세</Typography>
          {editMode ?
            <DeleteIconBtn className={classes.headerBtn} />
            : null}
        </div>

        <form>
          {editMode ?
            <React.Fragment>
              <TextField
                label="조회수"
                type="number"
                value={views}
                className={classes.input}
                disabled
              />

              <TextField
                label="좋아요"
                type="number"
                value={likes}
                className={classes.input}
                disabled
              />

              <TextField
                label="참여인원"
                type="number"
                value={participants.length}
                className={classes.input}
                disabled
              />
            </React.Fragment>
            : null
          }

          <br />

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

          <TextField
            id="resultDate"
            label="발표날짜"
            type="date"
            value={resultDate}
            onChange={this.handleChange('resultDate')}
            className={classes.input}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="prize"
            label="상품"
            type="text"
            value={prize}
            onChange={this.handleChange('prize')}
            className={classes.input}
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
        </form>

        <div className={classes.participants}>
          <Grid container>
            <Grid item xs={12} md={6} className={classes.grid}>
              <div className={classes.spaceBetween}>
                <Typography variant='title' className={classes.title}>이벤트 참여자 목록</Typography>
                <AddIconBtn sm className={classes.eventParticipantAddBtn} />
              </div>
              <List className={classes.listContainer}>
                {participants.map(({ name, date }, index) =>
                  <React.Fragment key={index}>
                    <ListItem button className={classes.listItem}>
                      <div className={classes.userContainer}>
                        <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
                        <Typography variant='subheading'>{name}</Typography>
                      </div>
                      <Typography variant='caption'>{'참여: ' + date}</Typography>
                      <DeleteIconBtn sm color='default' />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                )}
              </List>
            </Grid>

            <Grid item xs={12} md={6} className={classes.grid}>
              <Typography variant='title'>이벤트 참여자 상세</Typography>

              <div className={classes.spaceBetween}>
                <div>
                  <TextField
                    label="이름"
                    type="text"
                    value={name}
                    className={classes.input}
                    disabled
                  />

                  <TextField
                    label="응답날짜"
                    type="date"
                    value={date}
                    className={classes.input}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                  />
                </div>

                <Button variant='raised' color='primary' className={classes.awardBtn}>수여</Button>
              </div>

              <div className={classes.eventAnswer}>
                <Typography variant='body2'>이벤트 응답</Typography>
                <List className={classes.listContainer}>
                  {answers.map((answer, index) =>
                    <React.Fragment key={index}>
                      <ListItem className={classes.listItem}>
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: answer
                          }}
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  )}
                </List>
              </div>
            </Grid>

          </Grid>
        </div >
      </div >
    );
  }
}

export default withStyles(styles)(EventDetail);
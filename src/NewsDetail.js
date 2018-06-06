import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider } from '@material-ui/core';

import FaIconBtn from './FaIconBtn';
import CorrectionWriteDialog from './CorrectionWriteDialog';
import NewsList from './NewsList';
import NameCard from './NameCard';
import CommentList from './CommentList';
import { TabList } from './NewsTabConfig';
import {
  newsDetail as news,
  newsDetailContent,
  writerDemo,
  commentList,
  userDemo,
  newsList
} from './store';

const styles = theme => ({
  article: {
    padding: '0 20px',
    marginTop: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: 40,
  },
  yellowHighlight: {
    display: 'inline-block',
    borderBottom: '2px #ECCA30 solid',
    color: '#000',
    textDecoration: 'none',
  },
  title: {
    marginTop: '60px',
    marginBottom: '60px',
    fontSize: '30px',
    lineHeight: '38px',
  },
  writtenBy: {
    display: 'block',
  },
  author: {
    display: 'inline-block',
    borderBottom: '2px #ECCA30 solid',
    color: '#000',
    textDecoration: 'none',
  },
  footer: {
    marginTop: '80px',
    textAlign: 'center',
  },
  correctionBtn: {
    color: 'rgba(0, 0, 0, .6)',
    border: '1px #ECCA30 solid',
  },
  date: {
    display: 'block',
    marginTop: '20px',
    color: '#b2b2b2',
  },
  listContainer: {
    width: '100%',
    textAlign: 'center'
  },
  listIndicator: {
    marginBottom: '40px',
    color: theme.palette.primary.main
  },
  divider: {
    width: '100%',
    margin: '40px 0',
  },
});

class NewsDetail extends Component {
  state = {
    correctionOpen: false,
  };

  toggleCorrectionDialog = () => this.setState(({ correctionOpen }) => ({ correctionOpen: !correctionOpen }));

  render() {
    const { classes } = this.props;
    const { correctionOpen } = this.state;

    return (
      <article className={classes.article}>

        <header className={classes.header}>
          <Link to="/" className={classes.yellowHighlight}>{news.category}</Link>
          <Typography
            className={classes.title}
            variant="display2"
          >
            {news.title}
          </Typography>
          <p>
            <span className={classes.writtenBy}>작성자</span>
            <Link className={classes.author} to="/">{news.writer}</Link>
          </p>
        </header>

        <section
          className='article__content'
          dangerouslySetInnerHTML={{ __html: newsDetailContent }}
        />

        <footer className={classes.footer}>

          <p className="post__author">
            <span className={classes.writtenBy}>작성자</span>
            <Link className={classes.yellowHighlight} to="/">{news.writer}</Link>
          </p>
          <time className={classes.date}>{news.lastUpdatedDate}</time>

        </footer>

        <Divider className={classes.divider} />

        <NameCard
          writer={writerDemo}
          size={500}
        />

        <FaIconBtn
          iconLeft
          btnStr='기사의 내용 중 일부가 잘못된 경우'
          type='exclamation-triangle'
          variant='outlined'
          onClick={this.toggleCorrectionDialog}
          className={classes.correctionBtn}
        />

        {correctionOpen
          ? <CorrectionWriteDialog
            open={correctionOpen}
            newsId={news.id}
            handleClose={this.toggleCorrectionDialog}
          />
          : null
        }

        <Divider className={classes.divider} />

        <CommentList
          list={commentList}
          user={userDemo}
          writebox
          showLoadMoreBtn
        />

        <Divider className={classes.divider} />

        <div className={classes.listContainer}>
          <Typography variant='headline' className={classes.listIndicator}>
            <i className="fas fa-md fa-code-branch"></i> 같은 분류의 다른 기사
          </Typography>

          <NewsList
            index={TabList.findIndex(([category]) => category === news.category)}
            newsList={newsList}
          />
        </div>

      </article>
    );
  }
}

export default withStyles(styles)(NewsDetail);
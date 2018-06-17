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

import theme from './ThemeConfig';
import { mediumRoot, marginVertical, centerChildrenInline } from './styles';
import FaIcon from './FaIcon';

const styles = {
  mediumRoot,
  centerChildrenInline,
  header: {
    textAlign: 'center',
    marginBottom: 40,
  },
  yellowHighlight: {
    borderBottom: '2px #ECCA30 solid',
    color: '#000',
    textDecoration: 'none',
  },
  title: {
    ...marginVertical(60),
    fontSize: '30px',
    lineHeight: '38px',
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
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .6)',
    border: '1px #ECCA30 solid',
    marginTop: 20,
  },
  date: {
    display: 'block',
    marginTop: 20,
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
};

class NewsDetail extends Component {
  state = {
    correctionOpen: false,
  };

  toggleCorrectionDialog = () => this.setState(({ correctionOpen }) => ({ correctionOpen: !correctionOpen }));

  render() {
    const { classes } = this.props;
    const { correctionOpen } = this.state;

    return (
      <article className={classes.mediumRoot}>

        <header className={classes.header}>
          <Link to="/" className={classes.yellowHighlight}>{news.category}</Link>
          <Typography
            className={classes.title}
            variant="display2"
          >
            {news.title}
          </Typography>
          <div>
            <div>작성자</div>
            <Link className={classes.author} to="/">{news.writer}</Link>
          </div>
        </header>

        <section
          className='article__content'
          dangerouslySetInnerHTML={{ __html: newsDetailContent }}
        />

        <footer className={classes.footer}>
          <div>작성자</div>
          <Link className={classes.yellowHighlight} to="/">{news.writer}</Link>
          <time className={classes.date}>{news.lastUpdatedDate}</time>
        </footer>

        <Divider className={classes.divider} />

        <NameCard
          writer={writerDemo}
          size={500}
          center
        />

        <div className={classes.centerChildrenInline}>
          <FaIconBtn
            iconLeft
            btnStr='기사의 내용 중 일부가 잘못된 경우'
            icon='exclamation-triangle'
            variant='outlined'
            onClick={this.toggleCorrectionDialog}
            className={classes.correctionBtn}
          />
        </div>

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
            <FaIcon icon='code-branch' /> 같은 분류의 다른 기사
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
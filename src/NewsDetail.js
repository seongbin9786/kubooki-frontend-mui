import React from 'react';
import injectSheet from 'react-jss';
import { Typography, Divider, withWidth } from '@material-ui/core';
import { Link } from 'react-router-dom';

import DialogOwnerComponent from './DialogOwnerComponent';
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

import './content.css';
import theme from './ThemeConfig';
import { mediumRootWithPadding, marginVertical, centerChildrenInline, centerFlex } from './styles';
import FaIcon from './FaIcon';

const styles = {
  mediumRootWithPadding,
  centerChildrenInline,
  centerFlex,
  header: {
    textAlign: 'center',
    marginBottom: 40,
  },
  yellowHighlight: {
    color: theme.palette.primary.main,
    borderBottom: '2px #ECCA30 solid',
    textDecoration: 'none',
  },
  title: {
    ...marginVertical(60),
    fontSize: '30px',
    lineHeight: '38px',
  },
  authorIncidator: {
    color: theme.palette.third.main,
  },
  author: {
    composes: '$yellowHighlight',
    display: 'inline-block',
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
    color: theme.palette.third.main,
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

class NewsDetail extends DialogOwnerComponent {
  state = {
    dialogOpen: {
      correction: false,
    }
  };

  render() {
    const { classes, width } = this.props;
    const { dialogOpen: { correction } } = this.state;

    return (
      <article className={classes.mediumRootWithPadding}>

        <header className={classes.header}>
          <Link to="/" className={classes.yellowHighlight}>{news.category}</Link>
          <Typography
            className={classes.title}
            variant={width === 'xs' ? 'display1' : 'display3'}
          >
            {news.title}
          </Typography>
          <div>
            <div className={classes.authorIncidator}>작성자</div>
            <Link className={classes.author} to="/">{news.writer}</Link>
          </div>
        </header>

        <section
          className='article__content'
          dangerouslySetInnerHTML={{ __html: newsDetailContent }}
        />

        <footer className={classes.footer}>
          <div className={classes.authorIncidator}>작성자</div>
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
            onClick={this.toggleDialog('correction')}
            className={classes.correctionBtn}
          />
        </div>

        <CorrectionWriteDialog
          open={correction}
          newsId={news.id}
          handleClose={this.toggleDialog('correction')}
        />

        <Divider className={classes.divider} />

        <div className={classes.centerFlex}>
          <CommentList
            list={commentList}
            user={userDemo}
            writebox
            showLoadMoreBtn
          />
        </div>

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

export default injectSheet(styles)(withWidth()(NewsDetail));
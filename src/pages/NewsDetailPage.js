import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { Typography, Divider, withWidth } from '@material-ui/core';
import { Link } from 'react-router-dom';

import DialogOwnerComponent from '../utils/DialogOwnerComponent';
import FaIconBtn from '../components/buttons/FaIconBtn';
import CorrectionWriteDialog from '../components/dialogs/CorrectionWriteDialog';
import NewsList from '../containers/NewsList';
import NameCard from '../components/NameCard';
import CommentList from '../containers/CommentList';
import {
  writerDemo,
  commentList,
  userDemo,
} from '../modules/store';

import '../styles/content.css';
import theme from '../configs/ThemeConfig';
import { mediumRootWithPadding, marginVertical, centerChildrenInline, centerFlex } from '../styles/styles';
import FaIcon from '../components/FaIcon';
import NewsConstants from '../constants/NewsConstants';
import { getNewsDetailById, loadNewsDetail } from '../modules/News';

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

  componentDidMount() {
    const { news, location: { pathname }, loadNewsDetail } = this.props;
    const id = getNewsIdByPath(pathname);

    if (news === undefined) {
      loadNewsDetail(id);
    }
  }

  getWriterNameById(id) {
    return '김성빈';
  }

  render() {
    const { classes, width, news } = this.props;
    const { dialogOpen: { correction } } = this.state;

    if (news === undefined)
      return null;
    else
      console.log(news);

    const category = NewsConstants.getCategoryNameByValue(news.newsCategory);
    const categoryUrl = NewsConstants.getLinkByCategoryValue(news.newsCategory);

    const date = '2018-09-30';
    const writer = this.getWriterNameById(news.writerId);

    return (
      <article className={classes.mediumRootWithPadding}>

        <header className={classes.header}>
          <Link to={categoryUrl} className={classes.yellowHighlight}>{category}</Link>
          <Typography
            className={classes.title}
            variant={width === 'xs' ? 'display1' : 'display3'}
          >
            {news.title}
          </Typography>
          <div>
            <div className={classes.authorIncidator}>작성자</div>
            <Link className={classes.author} to="/">{writer}</Link>
          </div>
        </header>

        <section
          className='article__content'
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        <footer className={classes.footer}>
          <div className={classes.authorIncidator}>작성자</div>
          <Link className={classes.yellowHighlight} to="/">{writer}</Link>
          <time className={classes.date}>{date}</time>
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

        {correction && <CorrectionWriteDialog
          open={correction}
          newsId={news.id}
          handleClose={this.toggleDialog('correction')}
        />}

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
            index={NewsConstants.getTabIndexByCategoryValue(news.newsCategory)}
          />
        </div>

      </article>
    );
  }
}

const getNewsIdByPath = path => {
  console.log(path);

  const beginIdx = path.lastIndexOf('/') + 1;
  const endIdx = path.length;

  const idStr = path.slice(beginIdx, endIdx);

  return parseInt(idStr, 10);
};

const mapStateToProps = ({ news }, { location: { pathname } }) => ({
  news: getNewsDetailById(news)(getNewsIdByPath(pathname))
});

const mapDispatchToProps = {
  loadNewsDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(withWidth()(NewsDetail)));
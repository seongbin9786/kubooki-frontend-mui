import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider } from '@material-ui/core';

import NewsList from './NewsList';
import NameCard from './NameCard';
import CommentList from './CommentList';
import { TabList } from './NewsTabConfig';
import {
  newsDetail as news,
  newsDetailPageParagraphs,
  newsDetailpageImages,
  writerDemo,
  commentList,
  userDemo,
  newsList
} from './store';

const styles = theme => ({
  article: {
    padding: '0 20px',
    paddingTop: '100px',
  },
  header: {
    textAlign: 'center',
  },
  yellowHighlight: {
    display: 'inline-block',
    borderBottom: '2px #ECCA30 solid',
    color: '#000',
    textDecoration: 'none',
  },
  title: {
    margin: '0 auto 40px',
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
  figure: {
    margin: '80px auto',
    marginBottom: '60px',
    maxWidth: '1000px !important',
  },
  img: {
    maxWidth: '100%',
  },
  figCaption: {
    maxWidth: '1100px',
  },
  body: {
    position: 'relative',
  },
  paragraph: {
    marginBottom: '28px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  footer: {
    margin: '80px 0 60px',
    textAlign: 'center',
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
    margin: '50px 0',
    color: theme.palette.primary.main
  }
});

const NewsDetail = ({ classes }) => (
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

    <section>

      <figure className={classes.figure}>
        <img
          className={classes.img}
          src="https://www.creativeboom.com/uploads/articles/2b/2be47fa48493c19a47bb27edee9d03e4c0335b04_1100.jpg"
          alt="© 김성빈"
          width="1100"
        />
        <figcaption className={classes.figCaption}>
          <p style={{ margin: 0 }}>© 김성빈</p>
        </figcaption>
      </figure>

      <div className={classes.body}>
        {newsDetailPageParagraphs.map((content, index) => (
          <p className={classes.paragraph} key={index} dangerouslySetInnerHTML={{ __html: content }}></p>
        ))}

        {newsDetailpageImages.map((imgUrl, index) => (
          <figure className={classes.figure} key={index}>
            <img
              className={classes.img}
              src={imgUrl}
              alt="© 김성빈"
              width="1100"
            />
            <figcaption className={classes.figCaption}>
              <p style={{ margin: 0 }}>© 김성빈</p>
            </figcaption>
          </figure>
        ))}

      </div>

    </section>

    <footer className={classes.footer}>

      <p className="post__author">
        <span className={classes.writtenBy}>작성자</span>
        <Link className={classes.yellowHighlight} to="/">{news.writer}</Link>
      </p>
      <time className={classes.date}>{news.lastUpdatedDate}</time>

    </footer>

    <NameCard
      writer={writerDemo}
    />

    <Divider />

    <CommentList
      list={commentList}
      user={userDemo}
      writebox
    />

    <Divider />

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

export default withStyles(styles)(NewsDetail);
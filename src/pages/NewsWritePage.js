import React from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography, Button, withWidth } from '@material-ui/core';

import NewsFeedbackList from '../containers/NewsFeedbackList';
import NameCard from '../components/NameCard';
import MyNewsList from '../containers/MyNewsList';
import NewsWriteDialog from '../components/dialogs/NewsWriteDialog';
import { writerDemo } from '../modules/store';
import Spacing from '../styles/Spacing';
import FaIcon from '../components/FaIcon';
import { smallRootWithPadding, marginVertical } from '../styles/styles';
import DialogOwnerComponent from '../utils/DialogOwnerComponent';
import { postNews } from '../modules/News';
import NewsConstants from '../constants/NewsConstants';

const styles = {
  smallRootWithPadding,
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
  },
  btn: {
    ...marginVertical(16),
    fontSize: '1rem',
  },
};

class NewsWritePage extends DialogOwnerComponent {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: {
        newsWrite: false,
      },
    };
  }

  handleNewsSubmit = formData => {
    const { postNews } = this.props;
    const toSend = {
      category: 1,
      newsCategory: NewsConstants.getCategoryValueByName(formData.category),
      title: formData.title,
      content: formData.content
    };

    postNews(toSend);
  }

  render() {
    const { classes, width } = this.props;
    const { dialogOpen: { newsWrite } } = this.state;
    const isMobile = width === 'xs';

    return (
      <React.Fragment>
        {this.renderNavBlocker()}

        <div className={classes.smallRootWithPadding}>
          <header className={!isMobile ? classes.header : null}>
            <Typography variant={isMobile ? 'display1' : 'display2'}>
              기사 작성 페이지
            </Typography>
            <Button
              variant="raised"
              color="primary"
              onClick={this.toggleDialog('newsWrite')}
              fullWidth={isMobile}
              className={isMobile ? classes.btn : null}
            >
              기사 작성&nbsp;&nbsp;<FaIcon icon='pencil-alt' />
            </Button>
          </header>

          <NameCard writer={writerDemo} myPage />

          <Spacing height={12} />

          <NewsFeedbackList />

          <Spacing height={12} />

          <MyNewsList />
        </div>

        <NewsWriteDialog
          open={newsWrite}
          onSubmit={this.handleNewsSubmit}
          handleClose={this.toggleDialog('newsWrite')}
        />
      </React.Fragment >
    );
  }
}

const mapDispatchToProps = {
  postNews
};

export default connect(null, mapDispatchToProps)(withWidth()(withStyles(styles)(NewsWritePage)));
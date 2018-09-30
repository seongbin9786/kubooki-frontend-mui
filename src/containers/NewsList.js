import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridListTemplate from '../utils/GridListTemplate';
import NewsHeadlineItem from '../components/NewsHeadlineItem';
import NewsItem from '../components/NewsItem';
import { getNewsList, loadNewsList } from '../modules/News';
import NewsConstants from '../constants/NewsConstants';

const REQ_COUNT = 10;

class NewsList extends Component {
  state = {
    offset: 0,
    limit: REQ_COUNT
  };

  handleLoadMoreList = () => {
    const { offset, limit } = this.state;
    const { loadNewsList } = this.props;
    const maxIdx = offset + limit;

    loadNewsList(offset, maxIdx);

    this.setState({ offset: maxIdx, limit: maxIdx + REQ_COUNT });
  }

  componentDidMount() {
    const { newsList } = this.props;

    if (newsList.length === 0) {
      this.handleLoadMoreList();
    }
  }

  render() {
    const { pathname, index: indexFromProp, newsList, noTopMargin } = this.props;

    const index = indexFromProp !== undefined ? indexFromProp : NewsConstants.getTabIndexByPath(pathname);
    const currentTab = NewsConstants.getCategoryValueByIndex(index);
    const filterNewsByCategory = news => {
      if (currentTab === 'ALL' || currentTab === news.newsCategory)
        return <NewsItem news={news} key={news.id} />;
      else
        return null;
    };

    const items = newsList.map(news => filterNewsByCategory(news));
    if (currentTab === 'ALL')
      items.unshift(<NewsHeadlineItem key='head' />);

    return (
      <GridListTemplate
        items={items}
        btnStr='기사 더 불러오기'
        handleBtnClick={this.handleLoadMoreList}
        noTopMargin={noTopMargin}
      />
    );
  }
}

const mapStateToProps = ({ news }) => ({
  newsList: getNewsList(news)
});

const mapDispatchToProps = {
  loadNewsList
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
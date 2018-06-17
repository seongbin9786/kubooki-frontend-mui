import React from 'react';

import FlatListTemplate from './FlatListTemplate';
import NewsCorrectionItem from './NewsCorrectionItem';
import { correctionList } from './store';
import SortBar from './SortBar';
import LoadMoreBtn from './LoadMoreBtn';
import FaIcon from './FaIcon';

export default () => {
  const titleMsg = '들어온 정정 요청';
  const noContentMsg = <span><FaIcon icon='lg-smile' /> 정정 요청된 기사가 없습니다.</span>;
  const items = correctionList.map((item, index) => <NewsCorrectionItem item={item} key={index} />);

  return (
    <FlatListTemplate
      titleType='display1'
      title={titleMsg}
      subHeader={<SortBar tabName='오래된 요청 순' />}
      items={items}
      noContentMsg={noContentMsg}
      loadMoreBtn={<LoadMoreBtn />}
    />
  );
};
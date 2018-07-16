import React from 'react';
import { withWidth } from '@material-ui/core';

import FlatListTemplate from '../utils/FlatListTemplate';
import NewsCorrectionItem from '../components/NewsCorrectionItem';
import { correctionList } from '../modules/store';
import SortBar from '../components/inputs/SortBar';
import LoadMoreBtn from '../components/buttons/LoadMoreBtn';
import FaIcon from '../components/FaIcon';
import NewsCorrectionItemMobile from '../components/NewsCorrectionItemMobile';

export default withWidth()(({ width }) => {
  const titleMsg = '들어온 정정 요청';
  const noContentMsg = <span><FaIcon icon='lg-smile' /> 정정 요청된 기사가 없습니다.</span>;
  const Component = width === 'xs' ? NewsCorrectionItemMobile : NewsCorrectionItem;
  const items = correctionList.map((item, index) => <Component item={item} key={index} />);

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
});
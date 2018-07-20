import React, { Component } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import EventList from '../containers/EventList';
import { eventList, eventDetail, eventParticipateDetail } from '../modules/store';
import EventDetailParticipate from '../containers/EventDetailParticipate';
import { SmallRootWithPadding } from '../styles/CommonStyledComponent';
import LoadMoreBtn from '../components/buttons/LoadMoreBtn';

const StyledLoadMoreBtn = styled(LoadMoreBtn)`
  margin-bottom: 60px;
`;

class MyEventListPage extends Component {
  state = {
    detailOpen: false,
  };

  handleModalOpen = id => () =>
    this.setState(({ detailOpen }) => ({
      detailOpen: !detailOpen
    }));

  render() {
    const { detailOpen } = this.state;
    const { history } = this.props;

    return (
      <SmallRootWithPadding>
        <Typography variant='display1'>내가 참여한 이벤트</Typography>

        <EventList
          history={history}
          eventList={eventList}
          dontDisplayAsHeadline
          customHandleClick={this.handleModalOpen}
          noSortBar
          noTopMargin
          noBottomMargin
        />

        <StyledLoadMoreBtn />

        <EventDetailParticipate
          open={detailOpen}
          eventDetail={eventDetail}
          eventParticipateDetail={eventParticipateDetail}
        />

      </SmallRootWithPadding>
    );
  }
}

export default MyEventListPage;
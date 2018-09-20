import React, { Component } from 'react';

import BoardDetailPage from './BoardDetailPage';
import { eventItem, eventDetail, eventParticipateFirstTime } from '../modules/store';
import EventParticipateBtn from '../components/buttons/EventParticipateBtn';
import EventDetailParticipate from '../containers/EventDetailParticipate';

export default class EventDetailPage extends Component {
  state = {
    detailOpen: false,
  };

  toggle = () => this.setState(({ detailOpen }) => ({ detailOpen: !detailOpen }));

  render() {
    const { detailOpen } = this.state;
    const footer =
      <React.Fragment>
        {!detailOpen && <EventParticipateBtn handleClick={this.toggle} />}
        <EventDetailParticipate
          open={detailOpen}
          eventDetail={eventDetail}
          eventParticipateDetail={eventParticipateFirstTime}
        />
      </React.Fragment>;

    return (
      <React.Fragment>
        <BoardDetailPage
          item={eventItem}
          useComment
          useLike
          footer={footer}
        />
      </React.Fragment>
    );
  }
}
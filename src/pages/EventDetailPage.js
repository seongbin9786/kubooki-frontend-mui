import React, { Component } from 'react';

import BoardDetailPage from './BoardDetailPage';
import { eventItem, eventDetail } from '../modules/store';
import EventParticipateBtn from '../components/buttons/EventParticipateBtn';
import EventDetail from '../containers/EventDetail';

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
        <EventDetail
          eventDetail={eventDetail}
          open={detailOpen}
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
import React, { Component } from 'react';

import BoardDetail from './BoardDetail';
import { eventItem, eventDetail } from './store';
import EventParticipateBtn from './EventParticipateBtn';
import EventDetail from './EventDetail';

export default class EventDetailPage extends Component {
  state = {
    detailOpen: false,
  };

  toggle = () => this.setState(
    ({ detailOpen }) =>
      ({ detailOpen: !detailOpen })
  );

  render() {
    const { detailOpen } = this.state;
    const footer =
      <React.Fragment>
        {detailOpen ? null : <EventParticipateBtn handleClick={this.toggle} />}
        <EventDetail
          eventDetail={eventDetail}
          open={detailOpen}
        />
      </React.Fragment>;

    return (
      <React.Fragment>
        <BoardDetail
          item={eventItem}
          useComment
          useLike
          footer={footer}
        />
      </React.Fragment>
    );
  }
}
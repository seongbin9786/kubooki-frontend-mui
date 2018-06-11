import React, { Component } from 'react';

import BoardDetail from './BoardDetail';
import { eventItem, eventDetail, eventManageDetail, eventParticipateDetail } from './store';
import EventParticipate from './EventParticipate';
import EventDetail from './EventDetail';

export default class EventDetailPage extends Component {
  state = {
    detailOpen: false,
  };

  toggleModal = () => this.setState(
    ({ participateDialogOpen }) =>
      ({ participateDialogOpen: !participateDialogOpen })
  );

  render() {
    const { detailOpen } = this.state;
    const footer = <EventParticipate handleClick={this.toggleModal} />;

    return (
      <React.Fragment>
        <BoardDetail
          item={eventItem}
          useComment
          useLike
          footer={footer}
        />

        {detailOpen ?
          <EventDetail
            eventDetail={eventDetail}
            eventManageDetail={eventManageDetail}
            eventParticipateDetail={eventParticipateDetail}
          />
          : null
        }

      </React.Fragment>
    );
  }
}
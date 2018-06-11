import React, { Component } from 'react';

import BoardDetail from './BoardDetail';
import { eventItem } from './store';
import EventParticipate from './EventParticipate';
import EventParticipateDialog from './EventParticipateDialog';

export default class EventDetailPage extends Component {
  state = {
    participateDialogOpen: false,
  };

  toggleModal = () => this.setState(
    ({ participateDialogOpen }) =>
      ({ participateDialogOpen: !participateDialogOpen })
  );

  render() {
    const { participateDialogOpen } = this.state;
    const footer = <EventParticipate handleClick={this.toggleModal} />;

    return (
      <React.Fragment>
        <BoardDetail
          item={eventItem}
          useComment
          useLike
          footer={footer}
        />
        {participateDialogOpen ?
          <EventParticipateDialog
            open={participateDialogOpen}
            handleClose={this.toggleModal}
          />
          : null}
      </React.Fragment>
    );
  }
}
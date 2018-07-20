import React, { Component } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import SearchBar from '../components/inputs/SearchBar';
import EventDetailManage from '../containers/EventDetailManage';
import CreateIconBtn from '../components/buttons/CreateIconBtn';
import EventList from '../containers/EventList';
import { eventDetail, eventManageParticipant, eventManageDetail, eventList } from '../modules/store';

const Header = styled.div`
  margin-bottom: 30px;

  @media(min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -20px;
`;

class EventManagePage extends Component {
  state = {
    detailOpen: false,
    isEditing: true,
  };

  handleClick = id => () => this.setState({ detailOpen: true });

  handleCreateClick = () => this.setState({ detailOpen: true, isEditing: false });

  render() {
    const { detailOpen, isEditing } = this.state;
    const { history } = this.props;

    return (
      <React.Fragment>

        <Header>
          <Typography variant='display1'>이벤트 관리</Typography>
          <SearchBar noMargin label='이벤트 검색' />
        </Header>

        <SubHeader>
          <CreateIconBtn onClick={this.handleCreateClick} />
        </SubHeader>

        <EventList
          eventList={eventList}
          history={history}
          customHandleClick={this.handleClick}
          dontDisplayAsHeadline
        />

        <EventDetailManage
          open={detailOpen}
          eventDetail={eventDetail}
          eventManageDetail={eventManageDetail}
          eventManageParticipant={eventManageParticipant}
        />

      </React.Fragment>
    );
  }
}

export default EventManagePage;
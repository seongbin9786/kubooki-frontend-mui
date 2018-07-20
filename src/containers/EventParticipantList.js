import React from 'react';
import styled from 'styled-components';
import { Typography, ListItem, List, Avatar, Divider } from '@material-ui/core';
import AddIconBtn from '../components/buttons/AddIconBtn';
import DeleteIconBtn from '../components/buttons/DeleteIconBtn';

const Title = styled(Typography)`
  && {
    margin-bottom: 4px;
  }
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAddIconBtn = styled(AddIconBtn)`
  && {
    margin-bottom: 4px;
  }
`;

const ListContainer = styled(List)`
  && {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 0px;
  }
`;

const StyledListItem = styled(ListItem)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  && {
    margin-right: 8px;
  }
`;

function EventParticipantList({ classes, participants }) {
  return (
    <React.Fragment>
      <SpaceBetween>
        <Title variant='title'>이벤트 참여자 목록</Title>
        <StyledAddIconBtn sm />
      </SpaceBetween>
      <ListContainer>
        {participants.map(({ name, answerDate }, index) =>
          <React.Fragment key={index}>
            <StyledListItem button>
              <UserContainer>
                <StyledAvatar>{name.charAt(0)}</StyledAvatar>
                <Typography variant='subheading'>{name}</Typography>
              </UserContainer>
              <Typography variant='caption'>{'참여: ' + answerDate}</Typography>
              <DeleteIconBtn sm color='default' />
            </StyledListItem>
            <Divider />
          </React.Fragment>
        )}
      </ListContainer>
    </React.Fragment>
  );
};

export default EventParticipantList;

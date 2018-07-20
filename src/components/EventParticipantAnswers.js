import React from 'react';
import styled from 'styled-components';
import { Typography, ListItem, List, Divider } from '@material-ui/core';

const EventAnswer = styled.div`
  padding: 8px;
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

function EventParticipantList({ classes, answers }) {
  return (
    <EventAnswer>
      <Typography variant='body2'>이벤트 응답</Typography>
      <ListContainer>
        {answers.map((answer, index) =>
          <React.Fragment key={index}>
            <StyledListItem>
              <div
                key={index}
                dangerouslySetInnerHTML={{
                  __html: answer
                }}
              />
            </StyledListItem>
            <Divider />
          </React.Fragment>
        )}
      </ListContainer>
    </EventAnswer>
  );
};

export default EventParticipantList;

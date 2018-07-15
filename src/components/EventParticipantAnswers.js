import React from 'react';
import { withStyles, Typography, ListItem, List, Divider } from '@material-ui/core';

const styles = {
  eventAnswer: {
    padding: 8,
  },
  listContainer: {
    border: '1px solid lightgray',
    borderRadius: 5,
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

function EventParticipantList({ classes, answers }) {
  return (
    <div className={classes.eventAnswer}>
      <Typography variant='body2'>이벤트 응답</Typography>
      <List className={classes.listContainer}>
        {answers.map((answer, index) =>
          <React.Fragment key={index}>
            <ListItem className={classes.listItem}>
              <div
                key={index}
                dangerouslySetInnerHTML={{
                  __html: answer
                }}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        )}
      </List>
    </div>
  );
};

export default withStyles(styles)(EventParticipantList);

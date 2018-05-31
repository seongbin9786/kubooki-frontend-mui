import React, { Component } from 'react';

import { faqList } from './store';
import FAQItem from './FAQItem';
import { Typography } from '@material-ui/core';

const containerStyle = {
  margin: '0 auto',
  marginTop: 20,
  maxWidth: '1280px',
};

const titleStyle = {
  margin: '10px'
};

const FIRST_ITEM = 0;

class ControlledExpansionPanels extends Component {
  state = {
    expanded: FIRST_ITEM,
  };

  handleOpen = index => (event, expanded) => {
    this.setState({
      expanded: expanded ? index : -1
    });
  };

  render() {
    const { expanded } = this.state;

    return (
      <div style={containerStyle}>
        <Typography variant='display1' style={titleStyle}>FAQ 목록</Typography>
        {faqList.map(
          (faq, index) =>
            <FAQItem
              faq={faq}
              expanded={expanded === index}
              handleOpen={this.handleOpen(index)}
              key={index}
            />
        )}
      </div>
    );
  }
}

export default ControlledExpansionPanels;
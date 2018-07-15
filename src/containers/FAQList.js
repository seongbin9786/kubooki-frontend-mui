import React, { Component } from 'react';

import { faqList } from './store';
import FAQItem from './FAQItem';
import { Typography } from '@material-ui/core';
import { smallRootWithPadding } from './styles';

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
      <div style={smallRootWithPadding}>
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
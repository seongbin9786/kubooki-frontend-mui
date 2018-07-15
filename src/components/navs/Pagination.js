import React, { Component } from 'react';

import FaIconBtn from './FaIconBtn';
import PaginationItem from './components/PaginationItem';

export default class Pagination extends Component {
  state = {
    total: this.props.total,
    current: 1,
    display: 5,
  };

  setCurrentValue = value => () => this.setState({ current: value });
  increaseCurrentValue = () => this.setState(({ current }) => ({ current: current + 1 }));
  decreaseCurrentValue = () => this.setState(({ current }) => ({ current: current - 1 }));

  populateArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }

  calculateRange() {
    const { total, current, display } = this.state;
    let end = total;
    let start = 1;
    if (display < end) {
      let beforeNumber = Math.round(display / 2 - 0.5);
      const afterNumber = beforeNumber;
      if (display % 2 === 0) {
        beforeNumber -= 1;
      }
      if (current <= beforeNumber + 1) {
        end = display;
      } else if (current >= (total - afterNumber)) {
        start = total - display + 1;
      } else {
        start = current - beforeNumber;
        end = current + afterNumber;
      }
    }
    return { start, end };
  };

  handleNavBtnClick(left) {
    const { current, total } = this.state;
    if (left && current === 1) return null;
    if (!left && current === total) return null;

    return left ? this.decreaseCurrentValue : this.increaseCurrentValue;
  }

  getNavBtn(left) {
    return (
      <FaIconBtn
        icon={left ? 'chevron-left' : 'chevron-right'}
        onlyIcon
        color='primary'
        onClick={this.handleNavBtnClick(left)}
      />
    );
  }

  render() {
    const { center } = this.props;
    const { current } = this.state;
    const { start, end } = this.calculateRange();
    const array = this.populateArray(start, end);

    return (
      <div style={center ? centerCSS : null}>
        {this.getNavBtn(true)}
        {array.map(value =>
          <PaginationItem
            key={value}
            value={value}
            selected={value === current}
            handleClick={this.setCurrentValue(value)}
          />
        )}
        {this.getNavBtn(false)}
      </div>
    );
  }
}

const centerCSS = { display: 'flex', justifyContent: 'center' };
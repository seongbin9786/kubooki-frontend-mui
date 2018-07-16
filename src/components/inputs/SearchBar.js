import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { TextField, InputAdornment } from '@material-ui/core';

import FaIcon from '../FaIcon';

const styles = {
  root: ({ noMargin, right }) => {
    const css = {
      zIndex: 1,
    };
    if (!noMargin) {
      css.margin = '0 auto';
      css.paddingLeft = 24;
      css.paddingRight = 24;
    }
    if (right) {
      css.display = 'flex';
      css.justifyContent = 'flex-end';
    }
    return css;
  },
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
    this.search = this.search.bind(this);
  }

  handleSearchTermChange(value) {
    this.setState({ searchTerm: value });
  }

  /* event 객체를 입력으로 받아야 함 */
  search({ key }) {
    if (key === 'Enter') {
      console.log('To Search: ', this.state.searchTerm);
      //TODO: 검색 결과 화면으로 이동
      // 1. 검색 Query 전송
      // 2. history.push('/검색결과화면')
    }
  }

  render() {
    const { classes, noMargin, label, fullWidth } = this.props;
    const { searchTerm } = this.state;

    // TODO 1: 매터리얼 UI로 TextField 만들기
    // TODO 2: value, onChange로 state.searchTerm에 연동
    // TODO 3: onKeyDown 이벤트에 search 메소드 등록하기
    // TODO 4: 검색 아이콘 위치시키기
    return (
      <div
        className={classes.root}
        onClick={e => e.stopPropagation()}
      >
        <TextField
          fullWidth={fullWidth}
          id="search"
          label={label ? label : '검색'}
          type="search"
          margin={noMargin ? 'none' : 'normal'}
          value={searchTerm}
          onChange={({ target: { value } }) => this.handleSearchTermChange(value)}
          onKeyDown={this.search}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <FaIcon icon='search' />
              </InputAdornment>
          }}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(SearchBar);
import React from 'react';
import styled from 'styled-components';
import { Divider, Paper } from '@material-ui/core';

import theme from '../configs/ThemeConfig';
import BoardListMobileItem from './BoardListMobileItem';

const RootPaper = styled(Paper)`
  && {
    width: 100%;
    margin-top: ${theme.spacing.unit * 3 + 'px'};
    overflow-x: auto;
  }
`;

function BoardListMobile({ rows, pathname }) {
  return (
    <RootPaper>
      {rows.map((row, index) =>
        <React.Fragment>
          <BoardListMobileItem
            item={row}
            key={index}
            pathname={pathname}
          />
          {rows.length - 1 !== index ? <Divider /> : null}
        </React.Fragment>
      )}
    </RootPaper>
  );
}

export default BoardListMobile;
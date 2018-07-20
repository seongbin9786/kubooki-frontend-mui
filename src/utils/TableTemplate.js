import React from 'react';
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

import theme from '../configs/ThemeConfig';

const RootPaper = styled(Paper)`
  && {
    width: 100%;
    margin-top: ${theme.spacing.unit * 3 + 'px'};
    overflow-x: auto;
  }
`;

const SmallTable = styled(Table)`
  && {
    min-width: 700px;
  }
`;

const PrimaryTableRow = styled(TableRow)`
  && {
    background-color: ${theme.palette.primary.main};
    color: white !important;
  }
`;

const PrimaryTableCell = styled(TableCell)`
  && {
    background-color: ${theme.palette.primary.main};
    color: white !important;
  }
`;

export default function TableTemplate({ columns, children }) {
  return (
    <RootPaper>
      <SmallTable>
        <TableHead>
          <PrimaryTableRow>
            {columns.map((column, index) =>
              <PrimaryTableCell key={index}>{column}</PrimaryTableCell>
            )}
          </PrimaryTableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </SmallTable>
    </RootPaper>
  );
}
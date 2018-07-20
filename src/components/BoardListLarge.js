import React from 'react';

import TableTemplate from '../utils/TableTemplate';
import BoardListLargeItem from './BoardListLargeItem';

function BoardListLarge({ rows, pathname }) {
  return (
    <TableTemplate columns={['ID', '제목', '작성자', '등록일', '조회수']}>
      {rows.map((row, index) =>
        <BoardListLargeItem
          item={row}
          key={index}
          pathname={pathname}
        />
      )}
    </TableTemplate>
  );
}

export default BoardListLarge;
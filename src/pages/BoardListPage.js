import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import BoardList from '../components/BoardList';
import DialogOwnerComponent from '../utils/DialogOwnerComponent';
import Pagination from '../components/navs/Pagination';
import BoardWriteDialog from '../components/dialogs/BoardWriteDialog';
import CreateIconBtn from '../components/buttons/CreateIconBtn';
import theme from '../configs/ThemeConfig';

const Root = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;
`;

const Title = styled(Typography)`
  margin-top: ${theme.spacing.unit * 4 + 'px'};
  margin-bottom: ${theme.spacing.unit * 5 + 'px'};
`;

const CreateCotainer = styled.div`
  ${props => props.addButtonRightAlign && `
    display: flex;
    justify-content: flex-end;
  `};
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
`;

class BoardListPage extends DialogOwnerComponent {
  state = {
    dialogOpen: {
      write: false,
    }
  };

  render() {
    const { dialogOpen: { write } } = this.state;
    const { addButtonRightAlign, boardTitle, boardList: { totalItems, list } } = this.props;

    return (
      <Root>
        <Title variant='display1'>{boardTitle}</Title>

        <CreateCotainer addButtonRightAlign={addButtonRightAlign} >
          <CreateIconBtn onClick={this.toggleDialog('write')} />
        </CreateCotainer>

        <BoardWriteDialog
          category={boardTitle}
          open={write}
          handleClose={this.toggleDialog('write')}
        />

        <BoardList rows={list} />

        <PaginationContainer>
          <Pagination total={totalItems} center />
        </PaginationContainer>
      </Root>
    );
  }
}

export default BoardListPage;
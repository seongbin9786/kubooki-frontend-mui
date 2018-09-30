import React from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withWidth from '@material-ui/core/withWidth';

import NewsConstants from '../../constants/NewsConstants';
import styled from 'styled-components';

const HeaderSpace = styled.div`
  height: 48px;
`;

const Container = styled.div`
  flex-grow: 1;
  z-index: 1101;
  position: fixed;
  ${({ width }) => width === 'xs' ? 'top: 56px;' : 'top: 64px;'};
  width: 100%;
`;

const CenteredTabs = ({ width, history, location: { pathname } }) => {

  const index = NewsConstants.getTabIndexByPath(pathname);
  const tabs = NewsConstants.getCategoriesObject().map(({ link, name }) => (
    <Tab
      label={name}
      key={name}
      onClick={() => history.push(link)}
    />
  ));

  // 예외 처리
  if (index === -1)
    return null;

  return (
    <React.Fragment>
      <HeaderSpace />
      <Container width={width}>
        <Paper>
          <Tabs
            value={index}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            {tabs}
          </Tabs>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default withWidth()(withRouter(CenteredTabs));

import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Collapse } from '@material-ui/core';

import FormComponent from '../utils/FormComponent';
import theme from '../configs/ThemeConfig';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 60px;
`;

const ActionBtn = styled(Button)`
  && {
    margin: ${theme.spacing.unit + 'px'};
  }
`;

/*
  상속으로 문제를 해결해야 할 듯
  템플릿 메서드 패턴 사용
*/
class EventDetailCommon extends FormComponent {
  constructor(props) {
    super(props);

    console.log('CONSTRUCTOR --- EventDetailCommon');
  }

  // 템플릿 메소드
  getButtonTitle() { throw 'override'; }

  // 템플릿 메소드
  getPageTitle() { throw 'override'; }

  // 템플릿 메소드
  getInputList() { throw 'override'; }

  // 템플릿 메소드
  renderAdditionalHeader() { }
  renderAdditionalContent() { }
  renderAdditionalFooter() { }

  renderCommonFields() {
    this.getInputList().map(input => this.renderField(input));
  }

  componentDidCatch(error, info) {
    console.log('[EventDetailCommon] error:', error);
    console.log('[EventDetailCommon] info:', info);
  }

  // 재사용 - 템플릿 메소드를 활용
  render() {
    const { open } = this.props;
    const pageTitle = this.getPageTitle();
    const buttonTitle = this.getButtonTitle();

    return (
      <Collapse in={open} collapsedHeight='0px'>
        <Header>
          <Typography variant='display1' id='pageTitle'>{pageTitle}</Typography>
          {this.renderAdditionalHeader()}
        </Header>
        {this.renderCommonFields()}
        {this.renderAdditionalContent()}
        <ButtonGroup>
          <ActionBtn color="primary">취소</ActionBtn>
          <ActionBtn color="primary" variant='raised'>{buttonTitle}</ActionBtn>
        </ButtonGroup>
        {this.renderAdditionalFooter()}
      </Collapse>
    );
  }
}

export default EventDetailCommon;
import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Grid } from '@material-ui/core';

import EventDetailCommon from './EventDetailCommon';
import theme from '../configs/ThemeConfig';
import DeleteIconBtn from '../components/buttons/DeleteIconBtn';
import EventParticipantAnswers from '../components/EventParticipantAnswers';
import EventParticipantList from './EventParticipantList';

const GridPane = styled(Grid)`
  && {
    padding: ${theme.spacing.unit + 'px'};
  }
`;

const ActionBtn = styled(Button)`
  && {
    margin: ${theme.spacing.unit + 'px'};
  }
`;

const HeaderDeleteIconBtn = styled(DeleteIconBtn)`
  margin-left: ${theme.spacing.unit + 'px'};
`;

class EventDetailManage extends EventDetailCommon {
  constructor(props) {
    super(props);

    console.log('CONSTRUCTOR --- EventDetailManage');

    const { eventDetail, eventManageDetail, eventManageParticipant } = this.props;
    const isEditing = eventManageParticipant.length !== 0; // 생성/수정 화면 구분

    this.state = {
      // Form으로 수정되는 값들
      title: '',
      startDate: '',
      endDate: '',
      resultDate: '',
      prize: '',
      questions: [], // 아직 등록할 수 있는 UI가 없음
      content: '',

      selected: 1, // 현재 선택된 참여자 Index
      isEditing,

      ...eventDetail,
      ...eventManageDetail,
    };
  }

  // 템플릿 메소드
  getButtonTitle() {
    return this.state.isEditing ? '수정' : '생성';
  }

  // 템플릿 메소드
  getPageTitle() {
    return this.state.isEditing ? '이벤트 관리 상세' : '이벤트 생성하기';
  }

  // 템플릿 메소드
  renderAdditionalHeader() {
    return <HeaderDeleteIconBtn />;
  }

  // 템플릿 메소드
  getInputList() {
    const { isEditing } = this.state;
    const { eventManageDetail, eventManageParticipant } = this.props;
    const { views, likes, noShowCount } = eventManageDetail;

    return [
      {
        label: '조회수',
        name: 'views',
        type: 'number',
        disabled: true,
        value: views,
        show: isEditing,
      },
      {
        label: '좋아요',
        name: 'likes',
        type: 'number',
        disabled: true,
        value: likes,
        show: isEditing,
      },
      {
        label: '참여인원',
        name: 'participants',
        type: 'number',
        disabled: true,
        value: eventManageParticipant.length,
        show: isEditing,
      },
      {
        label: '다시 보지 않기 수',
        name: 'noShowCount',
        type: 'number',
        disabled: true,
        value: noShowCount,
        show: isEditing,
      },
      {
        label: '제목',
        name: 'title',
      },
      {
        label: '시작날짜',
        name: 'startDate',
        type: 'date',
        shrink: true,
      },
      {
        label: '종료날짜',
        name: 'endDate',
        type: 'date',
        shrink: true,
      },
      {
        label: '당첨자 발표일',
        name: 'resultDate',
        type: 'date',
        shrink: true,
      },
      {
        label: '상품',
        name: 'prize',
      },
      // 질문도 필요한데, 질문은 어떻게 해야 할 지...
      {
        Component: 'quill',
        label: '본문',
        name: 'content',
      }
    ];
  }

  // 수정 화면에서
  // 참가자 목록과 현재 선택된 참가자 세부 사항도 필요함
  // eventManageParticipant <- 와 같이 하면 될 듯
  // 얘는 props로 충분함
  renderParticipantDetail() {
    const { selected, isEditing } = this.state;

    if (!isEditing) return;

    const { eventManageParticipant } = this.props;
    const { name, answerDate, wonPrize, myPrize } = eventManageParticipant[selected] || {};

    return [
      {
        label: '이름',
        name: 'name',
        disabled: true,
        value: name,
      },
      {
        label: '응답날짜',
        type: 'date',
        name: 'answerDate',
        shrink: true,
        disabled: true,
        value: answerDate,
      },
      {
        label: '당첨 여부',
        name: 'wonPrize',
        type: 'checkbox',
        disabled: true,
        value: wonPrize,
      },
      {
        label: '내가 받은 상품',
        name: 'myPrize',
        shrink: true,
        disabled: true,
        value: myPrize,
      },
    ].map(input => this.renderField(input));
  }

  renderAdditionalFooter() {
    const { selected, isEditing } = this.state;

    if (!isEditing) return null;

    const { eventManageParticipant } = this.props;
    const { answers } = eventManageParticipant[selected] || {};

    //생성하기 화면에서는 Question을 추가하는 페이지가 필요함 (현재 구현 X)
    // isEditing에서만 적용
    // Footer에 이벤트 참여자 상세 화면
    return (
      <Grid container>
        <GridPane item xs={12} md={6}>
          <EventParticipantList participants={eventManageParticipant} />
        </GridPane>
        <GridPane item xs={12} md={6}>
          <Typography variant='title'>이벤트 참여자 상세</Typography>
          {this.renderParticipantDetail()}
          <ActionBtn variant='raised' color='primary'>
            보상 지급하기
          </ActionBtn>
          <EventParticipantAnswers answers={answers} />
        </GridPane>
      </Grid>
    );
  }
}

export default EventDetailManage;
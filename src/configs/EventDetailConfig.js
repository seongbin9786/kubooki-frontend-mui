import QuillEditor from './QuillEditor';

export default [
  {
    label: '조회수',
    name: 'views',
    type: 'number',
    disabled: true,
    show: state => state.manageMode,
  },
  {
    label: '좋아요',
    name: 'likes',
    type: 'number',
    disabled: true,
    show: state => state.manageMode,
  },
  {
    label: '참여인원',
    name: 'participants',
    value: state => state.participants.length,
    type: 'number',
    disabled: true,
    show: state => state.manageMode,
  },
  {
    label: '다시 보지 않기 수',
    name: 'noShowCount',
    type: 'number',
    disabled: true,
    show: state => state.manageMode,
  },
  {
    label: '제목',
    name: 'title',
    disabled: state => !(state.manageMode || state.createMode),
  },
  {
    label: '시작날짜',
    name: 'startDate',
    type: 'date',
    shrink: true,
    disabled: state => !(state.manageMode || state.createMode),
  },
  {
    label: '종료날짜',
    name: 'endDate',
    type: 'date',
    shrink: true,
    disabled: state => !(state.manageMode || state.createMode),
  },
  {
    label: '당첨자 발표일',
    name: 'resultDate',
    type: 'date',
    shrink: true,
    disabled: state => !(state.manageMode || state.createMode),
  },
  {
    label: '상품',
    name: 'prize',
    disabled: state => !(state.manageMode || state.createMode),
  },
  {
    label: '당첨 여부',
    name: 'wonPrize',
    type: 'checkbox',
    disabled: true,
    show: state => state.participateMode,
  },
  {
    label: '내가 받은 상품',
    name: 'myPrize',
    shrink: true,
    disabled: true,
    show: state => state.participateMode
  },
  {
    Component: QuillEditor,
    label: '본문',
    name: 'content',
    onChange: thisVar => thisVar.handleQuillChange,
    show: state => state.manageMode || state.createMode,
  }
];

export const detailList = [
  {
    label: '이름',
    name: 'name',
    disabled: true,
    value: state => state.participant.name,
  },
  {
    label: '응답날짜',
    type: 'date',
    name: 'answerDate',
    shrink: true,
    disabled: true,
    value: state => state.participant.answerDate,
  },
  {
    label: '당첨 여부',
    name: 'wonPrize',
    type: 'checkbox',
    disabled: true,
    show: state => !state.participateMode,
  },
  {
    label: '내가 받은 상품',
    name: 'myPrize',
    shrink: true,
    disabled: true,
    show: state => !state.participateMode
  },
];
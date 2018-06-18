import QuillEditor from './QuillEditor';

export default [
  {
    label: '조회수',
    name: 'views',
    type: 'number',
    disabled: true,
    show: state => state.editMode,
  },
  {
    label: '다시 보지 않기 수',
    name: 'noShowCount',
    type: 'number',
    disabled: true,
    show: state => state.editMode,
  },
  {
    label: '좋아요',
    name: 'likes',
    type: 'number',
    disabled: true,
    show: state => state.editMode,
  },
  {
    label: '우선순위',
    name: 'priority',
    type: 'number',
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
    Component: QuillEditor,
    label: '본문',
    name: 'content',
    onChange: thisVar => thisVar.handleQuillChange,
  }
];
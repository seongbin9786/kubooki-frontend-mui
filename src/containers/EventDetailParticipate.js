import EventDetailCommon from './EventDetailCommon';

class EventDetailParticipate extends EventDetailCommon {
  constructor(props) {
    super(props);
    console.log('CONSTRUCTOR --- EventDetailParticipate');

    const { eventParticipateDetail: { answers } } = this.props;
    const isEditing = answers && answers.length !== 0;

    this.state = {
      isEditing,

      // handleAnswerChange에서 답안을 변경할 수 있기 때문
      // 수정 화면일때만 필요
      answers: isEditing ? answers : [],
    };
  }

  // 참여 정보 수정 화면일때만 필요
  handleAnswerChange = index => ({ target: { value } }) => {
    this.setState(
      ({ answers }) => ({
        answers: [
          ...answers.slice(0, index),
          value,
          ...answers.slice(index + 1),
        ]
      })
    );
  }

  renderQAField() {
    const { eventDetail: { questions } } = this.props;
    const { answers } = this.state;

    return questions.map((question, index) => this.renderField({
      label: question,
      name: `q${index}`,
      shrink: true,
      value: answers[index],
      onChange: () => this.handleAnswerChange(index)
    }));
  }

  // 템플릿 메소드
  renderAdditionalContent() {
    return this.renderQAField();
  }

  // 템플릿 메소드
  getButtonTitle() {
    return this.state.isEditing ? '수정' : '참여';
  }

  // 템플릿 메소드
  getPageTitle() {
    return this.state.isEditing ? '이벤트 참여 정보 수정하기' : '아래 양식을 기록해주세요';
  }

  // 템플릿 메소드
  getInputList() {
    const { eventDetail: { title, startDate, endDate, resultDate, prize } } = this.props;
    const { eventParticipateDetail: { wonPrize, myPrize } } = this.props;

    return [
      {
        label: '제목',
        name: 'title',
        value: title,
        disabled: true,
      },
      {
        label: '시작날짜',
        name: 'startDate',
        type: 'date',
        value: startDate,
        shrink: true,
        disabled: true,
      },
      {
        label: '종료날짜',
        name: 'endDate',
        type: 'date',
        value: endDate,
        shrink: true,
        disabled: true,
      },
      {
        label: '당첨자 발표일',
        name: 'resultDate',
        type: 'date',
        value: resultDate,
        shrink: true,
        disabled: true,
      },
      {
        label: '상품',
        name: 'prize',
        value: prize,
        disabled: true,
      },
      // 여기부턴 eventParticipateDetail이 제공해야 함
      {
        label: '당첨 여부',
        name: 'wonPrize',
        type: 'checkbox',
        value: wonPrize,
        disabled: true,
      },
      {
        label: '내가 받은 상품',
        name: 'myPrize',
        value: myPrize,
        shrink: true,
        disabled: true,
      },
      // questions, answers로 그려야 하는데
      // renderQAField()가 함
    ];
  }

  componentDidUpdate() {
    console.log('participate --- updated!');
  }
}

export default EventDetailParticipate;
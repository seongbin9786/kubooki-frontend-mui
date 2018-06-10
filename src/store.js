import User from './User';

export const globalUser = new User('김성빈', 'MANAGER');

// MAX: 14
// 웹 출석은 50% 이상=2, 50%미만=1
// 회의는 / 3.5 의 몫 (최대 4)
export const attendanceValues = [
  { date: '2018-05-01', count: 1, meetingAttend: 0, webAttend: 5, },
  { date: '2018-05-02', count: 1, meetingAttend: 0, webAttend: 5, },
  { date: '2018-05-03', count: 4, meetingAttend: 14, webAttend: 5, }, // 회의일
  { date: '2018-05-04', count: 2, meetingAttend: 0, webAttend: 8, },
  { date: '2018-05-05', count: 1, meetingAttend: 0, webAttend: 6, },
  { date: '2018-05-06', count: 2, meetingAttend: 0, webAttend: 8, },
  { date: '2018-05-07', count: 3, meetingAttend: 14, webAttend: 5, }, // 회의일
  { date: '2018-05-08', count: 2, meetingAttend: 0, webAttend: 8, },
  { date: '2018-05-09', count: 2, meetingAttend: 0, webAttend: 8, },
  { date: '2018-05-10', count: 4, meetingAttend: 14, webAttend: 5, }, // 회의일
  { date: '2018-05-11', count: 1, meetingAttend: 0, webAttend: 3, },
  { date: '2018-05-12', count: 2, meetingAttend: 0, webAttend: 8, },
  { date: '2018-05-13', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-14', count: 2, meetingAttend: 8, webAttend: 5, }, // 회의일
  { date: '2018-05-15', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-16', count: 2, meetingAttend: 0, webAttend: 10, },
  { date: '2018-05-17', count: 1, meetingAttend: 0, webAttend: 5, }, // 회의일
  { date: '2018-05-18', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-19', count: 2, meetingAttend: 0, webAttend: 10, },
  { date: '2018-05-20', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-21', count: 1, meetingAttend: 0, webAttend: 5, }, // 회의일
  { date: '2018-05-21', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-22', count: 2, meetingAttend: 0, webAttend: 10, },
  { date: '2018-05-23', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-24', count: 3, meetingAttend: 10, webAttend: 5, }, // 회의일
  { date: '2018-05-25', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-26', count: 2, meetingAttend: 0, webAttend: 10, },
  { date: '2018-05-27', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-28', count: 3, meetingAttend: 13, webAttend: 5, }, // 회의일
  { date: '2018-05-29', count: 1, meetingAttend: 0, webAttend: 4, },
  { date: '2018-05-30', count: 2, meetingAttend: 0, webAttend: 10, },
  { date: '2018-05-31', count: 4, meetingAttend: 14, webAttend: 5, }, // 회의일
];

export const attendanceUserList = [
  {
    id: 1,
    profilePic: 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg',
    name: '성빈',
    role: '정기자',
    department: '개발부',
    attendState: {
      webAttend: '출석',
      meetingAttend: '출석',
    }
  },
  {
    id: 2,
    profilePic: 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg',
    name: '성빈킴',
    role: '수습기자',
    department: '디자인부',
    attendState: {
      webAttend: '결석',
      meetingAttend: '지각',
    }
  },
  {
    id: 3,
    profilePic: 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg',
    name: '김성빈',
    role: '부장기자',
    department: '개발부',
    attendState: {
      webAttend: '출석',
      meetingAttend: '결석',
    }
  }
];

export const recentActivities = [
  {
    id: 1,
    user: {
      id: 1,
      profile: 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg',
      name: '김성빈 수습기자'
    },
    activity: {
      id: 1,
      detail: '기사 초안을 작성',
      date: '10분 전',
    }
  },
  {
    id: 2,
    user: {
      id: 1,
      profile: 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg',
      name: '김성빈 편집부장'
    },
    activity: {
      id: 1,
      detail: '김성빈 기자의 기사를 피드백',
      date: '30분 전',
    }
  },
  {
    id: 3,
    user: {
      id: 1,
      profile: 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg',
      name: '김성빈 국장'
    },
    activity: {
      id: 1,
      detail: '공지사항을 작성',
      date: '2시간 전',
    }
  },
  {
    id: 4,
    user: {
      id: 1,
      profile: 'http://img.insight.co.kr/static/2017/05/23/700/1a16372410wjk3fx8pe9.jpg',
      name: 'system',
    },
    activity: {
      id: 1,
      detail: '이벤트가 종료되었습니다.',
      date: '5시간 전',
    }
  },
];

export const eventItem = {
  id: 1,
  title: '거북이 12기 수습기자 모집',
  writer: '관리자',
  content: `
    <h2>9월 1일, 드디어 개강이 다가왔습니다!</h2>
      <img class='img__center' src='http://www.kubooki.com/xe/files/attach/images/41253/463/202/475ac4ded41c9d0d72752fa17de793f9.jpg' />
      <p>그와 함께 경기대학교 웹지 거북이에서는 12기 수습기자를 모집합니다. 관심있는 학우들은 언제든 편하게 신청해주세요</p>
      <p>또한 거북이에서는 12기 수습기자 모집과 함께 SNS 인증샷 이벤트를 진행합니다. 학교 곳곳에 있는 거북이 수습기자 모집 포스터와 본인의 신체부위 아무거나 같이 찍어 SNS에 인증해주세요! 학교 근처에도 있는 공차의 기프티콘을 드립니다~~ 학우들의 많은 참여 기다립니다 !</p>
      <img class='img__center' src='http://www.kubooki.com/xe/files/attach/images/41253/463/202/d898c686b261d3d133d014aa2bd07452.jpg' />

      <p>이벤트 기간 2018.06.05 ~ 2018.06.30</p>
      <p>상품: 문화상품권 \\100,000원권</p>
      <p>당첨자 발표일: 2018.06.30</p>

    `,
  creationDate: '2018.05.28',
  lastUpdateDate: '2018.05.28',
  views: 1,
  likes: 1,
};

export const meetingLogData = {
  id: 1,
  title: '5.28 회의록',
  writer: '김성빈',
  content: `
    <h2>1. 중앙회의</h2>
      <p>신방사 종총 김성빈 기자 뺴고 모두 참석</p>
      <p>-통장 사본 안 들고 온 사람 모두 목요일 회의때 가지고 오기</p>
      <p>-29일 총장님과 식사 국장, 편집 국장, 디자인 부장, 김성빈 정기자 참석</p>

    <h2>2. 논의안건</h2>
      <p>x</p>

    <h2>3. 기타안건</h2>
      <p>x</p>

    <h2>4. 부서별 회의</h2>
      <h3>1) 편집부 : 김성빈 - 사생총회 기사 작성 예정</h3>
        <p>김성빈 정기자 - 체대 군기 사건 기사 작성 예정</p>
        <p>김성빈 정기자 - 체대 군기 사건 기사 작성 예정</p>
        <p>김성빈 정기자 - 몰카 기사 예정</p>
      <h3>2) 영상기술부</h3>
        <p>앱 업로드</p>
      <h3>3) 디자인 부</h3>
        <p>수습기자 교육 재개</p>
      <h3>4) 교육부</h3>
        <p>x</p>
    `,
  creationDate: '2018.05.28',
  lastUpdateDate: '2018.05.28',
  views: 1,
  likes: 1,
};

export const announcementData = {
  id: 1,
  title: '거북이 내부 규칙 안내',
  writer: '관리자',
  content: `
    <h2>거북이에 가입하신 여러분 환영합니다.</h2>
      <p>거북이는 여러분의 기자 활동을 지원하는 데 최선을 다하겠습니다.</p>

    <h2>거북이의 내부 규칙을 읽고, 되도록 인지해주세요</h2>
      <p>귀하는 거북이 내에서 적용되는 모든 정책을 준수해야 합니다.</p>
    `,
  creationDate: '2012.05.31',
  lastUpdateDate: '2012.05.31',
  views: '2,230',
  likes: 32,
};

export const termsOfUse = {
  id: 1,
  title: '경기대학교 웹지거북이 이용 약관',
  writer: '관리자',
  content: `
    <h2>경기대학교 웹지 거북이에 오신 것을 환영합니다.</h2>
      <p>거북이 제품 및 서비스(‘거북이’)를 이용해 주셔서 감사합니다. 거북이는 경기대학교 수원캠퍼스 신학관 508호(5층)에서 제공합니다.</p>
      <p>거북이를 이용함으로써 귀하는 본 약관에 동의하게 되므로 본 약관을 주의 깊게 읽어보시기 바랍니다.</p>
      <p>거북이에는 때로 추가약관 또는 제품 요구사항(연령 요건 포함)이 적용될 수 있습니다. 추가약관은 관련 서비스에 대하여 제공되며, 귀하가 해당 서비스를 이용하는 경우 이 추가약관은 귀하와 웹지 거북이 간 계약의 일부가 됩니다.</p>

    <h2>거북이 이용</h2>
      <p>귀하는 거북이 내에서 적용되는 모든 정책을 준수해야 합니다.</p>
      <p>거북이의 오용을 삼가시기 바랍니다. 예를 들어 거북이 서비스를 방해하거나 거북이에서 제공하는 인터페이스 및 안내사항 이외의 다른 방법을 사용하여 액세스를 시도하지 않아야 합니다. 귀하는 오직 법률상 허용되는 범위에서만 거북이 서비스를 이용할 수 있습니다. 귀하가 거북이 약관이나 정책을 준수하지 않는 경우, 거북이 서비스 제공이 일시 중지 또는 중단될 수 있습니다.</p>
      <p>거북이 서비스를 사용한다고 해서 거북이 서비스 또는 액세스하는 콘텐츠의 지적재산권을 소유하게 되는 것은 아닙니다. 콘텐츠 소유자로부터 허가를 받거나 달리 법률에 따라 허용되는 경우를 제외하고, 거북이 서비스의 콘텐츠를 사용할 수 없습니다. 본 약관은 귀하에게 거북이에 사용된 브랜드나 로고를 사용할 권리를 부여하지 않습니다. 거북이에 또는 거북이와 함께 게재된 어떠한 법적 고지도 삭제하거나 감추거나 변경하지 마십시오.</p>
      <p>거북이는 거북이가 소유하지 않은 일부 콘텐츠를 표시할 수 있습니다. 그러한 콘텐츠에 대해서는 제공한 주체가 단독으로 책임지게 됩니다. 거북이는 콘텐츠의 위법성 여부 또는 거북이 정책 위반 여부를 결정하기 위해 검토할 수 있으며, 콘텐츠가 거북이 정책 또는 법률에 위반된다고 합리적으로 판단하는 경우 이를 삭제하거나 게시를 거부할 수 있습니다. 그렇다고 반드시 콘텐츠를 검토한다는 의미는 아니므로, 콘텐츠를 검토할 것이라고 간주하지 마십시오.</p>
      <p>거북이 이용과 관련하여 거북이는 귀하에게 서비스 고지, 관리 메시지 및 기타 정보를 발송할 수 있습니다. 귀하는 메시지 수신을 거부할 수 있습니다.</p>
      <p>일부 거북이 서비스는 휴대기기에서 사용할 수 있습니다. 트래픽 또는 보안 관련 법규 준수를 방해하거나 막는 방식으로 서비스를 사용해서는 안 됩니다.</p>
    `,
  creationDate: '31.05.2012',
  lastUpdateDate: '31.05.2012',
  views: 15230,
  likes: 32,
};

export const announcementListViewData = {
  totalItems: 20,
  list: [
    {
      id: 1,
      title: '거북이 내부 규칙 사항 안내',
      writer: '김성빈',
      creationDate: '31.05.2012',
      views: 813,
    }
  ]
};

export const meetingLogListViewData = {
  totalItems: 20,
  list: [
    {
      id: 1,
      title: '5.28 회의록',
      writer: '김성빈',
      creationDate: '31.05.2018',
      views: 3,
    }
  ]
};

export const myFavoriteNewsList = [
  {
    date: '31.05.2018',
    list: [
      {
        id: 4,
        title: '2018학년도 잔디공원 돌 줍기 행사',
        writers: ['김성빈', '성빈킴'],
        category: '경기 소식',
        creationDate: '31.05.2018',
        lastUpdateDate: '31.05.2018',
        thumbnailUrl: 'http://www.kubooki.com/xe/files/thumbnails/151/262/320x240.crop.jpg',
      },
      {
        id: 3,
        title: '전공 선택 유연화 제도 설명회',
        writers: ['김성빈'],
        category: '경기 소식',
        creationDate: '22.05.2018',
        lastUpdateDate: null,
        thumbnailUrl: 'http://www.kubooki.com/xe/files/thumbnails/697/261/320x240.crop.jpg',
      },
    ],
  },
  {
    date: '30.05.2018',
    list: [
      {
        id: 2,
        title: '2018학년도 ‘봄, 소풍’ 봄 축제 3일차 거리행사',
        writers: ['김성빈'],
        category: '경기 소식',
        creationDate: '17.05.2018',
        lastUpdateDate: null,
        thumbnailUrl: 'http://www.kubooki.com/xe/files/thumbnails/421/261/320x240.crop.jpg',
      },
      {
        id: 1,
        title: '몰래 카메라 범죄, 사각지대에 놓인 인권과 책임의 행방',
        writers: ['김성빈'],
        category: '기획 연재',
        creationDate: '30.05.2018',
        lastUpdateDate: null,
        thumbnailUrl: 'http://www.kubooki.com/xe/files/thumbnails/129/262/320x240.crop.jpg',
      },
    ],
  }
];

export const faqList = [
  {
    id: 1,
    type: '질문 분류',
    question: '질문입니다.질문입니다.질문입니다.',
    answer: '답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.',
  },
  {
    id: 2,
    type: '질문 분류',
    question: '질문입니다.질문입니다.질문입니다.',
    answer: '답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.',
  },
  {
    id: 3,
    type: '질문 분류',
    question: '질문입니다.질문입니다.질문입니다.',
    answer: '답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.',
  },
  {
    id: 4,
    type: '질문 분류',
    question: '질문입니다.질문입니다.질문입니다.',
    answer: '답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.답변입니다.',
  },
];

export const newsList = [
  {
    id: 1,
    category: '경대피플',
    title: 'Juno Calypso\'s new series is set in Avon cosmetics founder\'s Cold War underground home',
    date: '15.05.2018',
    img: 'https://www.creativeboom.com/uploads/articles/bc/bcb8dc807536164d94e7d9f77e22728c970d1bee_1100.jpg',
  },
  {
    id: 2,
    category: '기획연재',
    title: 'Katharine Le Hardy\'s paintings of small islands found along the River Thames',
    date: '15.05.2018',
    img: 'https://www.creativeboom.com/uploads/articles/f0/f085f84180bca8f92e308261405ad481bec99bd3_630.jpg',
  },
  {
    id: 3,
    category: '경기소식',
    title: 'A guide to Innsbruck: City culture and outdoor adventure in the capital of the Alps',
    date: '15.05.2018',
    img: 'https://www.creativeboom.com/uploads/articles/42/42b32bd3ad7e61ed3fb03d8568050d42f4c3dd78_630.jpg',
  },
  {
    id: 4,
    category: '경기소식',
    title: 'Juno Calypso\'s new series is set in Avon cosmetics founder\'s Cold War underground home',
    date: '15.05.2018',
    img: 'https://www.creativeboom.com/uploads/articles/bc/bcb8dc807536164d94e7d9f77e22728c970d1bee_1100.jpg',
  },
  {
    id: 5,
    category: '기획연재',
    title: 'Katharine Le Hardy\'s paintings of small islands found along the River Thames',
    date: '15.05.2018',
    img: 'https://www.creativeboom.com/uploads/articles/f0/f085f84180bca8f92e308261405ad481bec99bd3_630.jpg',
  },
  {
    id: 6,
    category: '경대피플',
    title: 'A guide to Innsbruck: City culture and outdoor adventure in the capital of the Alps',
    date: '15.05.2018',
    img: 'https://www.creativeboom.com/uploads/articles/42/42b32bd3ad7e61ed3fb03d8568050d42f4c3dd78_630.jpg',
  },
  {
    id: 7,
    category: '경기소식',
    title: 'Juno Calypso\'s new series is set in Avon cosmetics founder\'s Cold War underground home',
    date: '15.05.2018',
    img: 'https://www.creativeboom.com/uploads/articles/bc/bcb8dc807536164d94e7d9f77e22728c970d1bee_1100.jpg',
  },
];

export const userDemo = {
  name: '김성빈',
  position: '수습 기자',
  introduction: '안녕하세요. 명함 구성 요소가 뭐가 있어야 할까요?',
  profileImg: 'https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg',
};

export const eventList = [
  {
    id: '1',
    title: '에버랜드 썸머 스플래쉬 제휴',
    thumbnail: 'http://cfile25.uf.tistory.com/image/24553738575E014D18A049',
    startDate: '05.06.2018',
    endDate: '30.08.2018',
    prize: '학생증 제시 30% 할인',
    resultDate: '-',
  },
  {
    id: '2',
    title: '롯데월드 삼바 카니발 퍼레이드 제휴',
    thumbnail: 'http://file.newswire.co.kr/data/datafile2/thumb_480/2014/07/20140721120937_2606824697.jpg',
    startDate: '05.06.2018',
    endDate: '30.08.2018',
    prize: '1인 입장 19,800~',
    resultDate: '-',
  },
  {
    id: '3',
    title: '어둠속의 대화 10주년 기념 제휴',
    thumbnail: 'http://blog.rightbrain.co.kr/CMS1/wp-content/uploads/2018/01/img.jpg',
    startDate: '05.06.2018',
    endDate: '30.08.2018',
    prize: '2인 이상 입장 시 20% 할인',
    resultDate: '-',
  },
  {
    id: '4',
    title: '11번가 취준생 일일 코디',
    thumbnail: 'http://www.kgnews.co.kr/news/photo/201710/496869_158919_1347.jpg',
    startDate: '05.06.2018',
    endDate: '30.06.2018',
    prize: '일일 무료 코디 제공',
    resultDate: '30.06.2018',
  },
  {
    id: '5',
    title: '거북이 12기 수습기자 모집',
    thumbnail: 'http://www.kubooki.com/xe/files/attach/images/41253/463/202/475ac4ded41c9d0d72752fa17de793f9.jpg',
    startDate: '05.06.2018',
    endDate: '30.06.2018',
    prize: '문화상품권 \\100,000',
    resultDate: '30.06.2018',
  },
];

export const correctionList = [
  {
    id: '1',
    status: '답변대기',
    title: '오탈자가 있습니다.',
    writer: '김성빈',
    reqDate: '2018.05.12',
    resDate: '2018.05.12',
    targetNews: {
      id: 1,
      title: '영문서류 클리닉 시행 안내'
    }
  },
  {
    id: '2',
    status: '답변완료',
    title: '학교 소개에 오류가 있습니다.',
    writer: '김성빈',
    reqDate: '2018.05.12',
    resDate: '2018.05.12',
    targetNews: {
      id: 1,
      title: '18학번 신입생들을 위한 학교 소개...'
    }
  },
];

export const feedbackList = [
  {
    id: '1',
    title: '영문서류 클리닉 신청 안내',
    writers: ['김성빈', '홍길동'],
    short: true,
    feedbackCount: 3,
    lastReqDate: '12.05.2018',
    lastResDate: '23.05.2018',
    status: '피드백 완료됨',
  },
  {
    id: '2',
    title: '전공 선택 유연화 제도 설명회',
    writers: ['김성빈'],
    short: false,
    feedbackCount: 2,
    lastReqDate: '13.05.2018',
    lastResDate: '-',
    status: '피드백 요청됨',
  },
  {
    id: '3',
    title: '2018학년도 \'봄, 소풍\' 봄 축제 3일차 거리행사',
    writers: ['김성빈'],
    short: false,
    feedbackCount: 2,
    lastReqDate: '15.05.2018',
    lastResDate: '-',
    status: '피드백 요청됨',
  },
];

/* 내 댓글이므로, 좋아요/싫어요를 할 수 없음 */
export const myCommentList = [
  {
    id: '1',
    date: '7시간 전',
    likes: '1',
    targetNews: 1,
    content: '댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1'.repeat(2)
  },
  {
    id: '2',
    date: '2주 전',
    likes: '5',
    targetNews: 1,
    content: '댓글 테스트 2'.repeat(10)
  },
  {
    id: '3',
    date: '1달 전',
    likes: '-1',
    targetNews: 1,
    content: '댓글 테스트 3'
  },
  {
    id: '4',
    date: '3개월 전',
    likes: '0',
    targetNews: 1,
    content: '댓글 테스트 1'
  },
  {
    id: '5',
    date: '9개월 전',
    likes: '0',
    targetNews: 1,
    content: '댓글 테스트 2'
  },
  {
    id: '6',
    date: '10개월 전',
    likes: '0',
    targetNews: 1,
    content: '댓글 테스트 3'
  },
];

export const commentList = [
  {
    id: '1',
    writer: '김성빈',
    date: '7시간 전',
    likes: '1',
    liked: false,
    hated: false,
    content: '댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1'
  },
  {
    id: '2',
    writer: '김성빈',
    date: '8시간 전',
    likes: '5',
    liked: true,
    hated: false,
    content: '댓글 테스트 2'
  },
  {
    id: '3',
    writer: '김성빈',
    date: '9시간 전',
    likes: '-1',
    liked: false,
    hated: true,
    content: '댓글 테스트 3'
  },
];

export const writerDemo = {
  name: '김성빈',
  position: '수습 기자',
  introduction: '안녕하세요. 명함 구성 요소가 뭐가 있어야 할까요?',
  profileImg: 'https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg',
};

export const newsDetail = {
  id: 1,
  category: '경기소식',
  title: '경기대학교 신입생들을 위한 새내기팁! 첫 번째, 통학버스와 고양이버스 안내',
  writer: '김성빈',
  lastUpdatedDate: '18.05.2018',
};

export const newsDetailContent = `
  <p>When French photographer <a href="http://www.raphaelolivier.com/">Raphael Olivier</a> decided to make a flying visit to North Korea in 2015, he had no expectations about the secretive nation; he was living in nearby Shanghai at the time and just happened to find a cheap ticket online and thought, why not? After just 24 hours wandering around Pyongyang, he was hooked.'</p>
  <img class="img__center" src="https://www.creativeboom.com/uploads/articles/d3/d3fc5dad8dc02436fcf204469355b3c771c94402_1100.jpg" alt="© 김성빈" />
  <p>"This express dip into the 'North' suddenly opened my eyes beyond anything I would have ever imagined," Raphael told Creative Boom. "The place actually fascinated me, everything about it was amazing. So much so that the next year, I decided to return for a longer trip in order to get a chance to see and understand more about this country so often misjudged."'</p>
  <img class="img__center" src="https://www.creativeboom.com/uploads/articles/10/1087391e8fa7196b091ef219c859d26a28a84b40_1100.jpg" alt="© 김성빈" />
  <p>One of the most obvious aspects of Pyongyang which immediately caught his attention was its "retro vibe and architecture". Which is why, during his second visit, he aimed to photograph its unique urban landscape. Through this series, many of the buildings he captured have a very strong Soviet modernist influence with a distinctive Korean style of their own.'</p>
  <img class="img__center" src="https://www.creativeboom.com/uploads/articles/6c/6cd1f8b0e5c7be298ab56420ae842d91e8c761cb_1100.jpg" alt="© 김성빈" />
  <p>"As opposed to many cities, which are now starting to look all the same worldwide, Pyongyang sees very little advertising or visual pollution, offering the visitor a very raw display of its urban form," Raphael adds. "To this day, Pyongyang is still one the most memorable places I have ever visited and, regardless of anyone's opinion on political or economic matters, I think it's fair to say that everyone visiting Pyongyang is left impressed by the city's strong and proud character.'</p>
  <img class="img__center" src="https://www.creativeboom.com/uploads/articles/bd/bdfd408afb7bc318e152cf5cb07b0b0add3cc2d7_1100.jpg" alt="© 김성빈" />
  <p>"My images are only a glimpse into a world that seems so distant yet so real, but I encourage anyone curious about the DPRK to go and visit to make an idea for themselves." Discover more at <a href="http://www.raphaelolivier.com/urban/documentary/photographer/north-korea/pyongyang/vintage/socialist/architecture/">raphaelolivier.com</a>.</p>
  <img class="img__center" src="https://www.creativeboom.com/uploads/articles/17/17cf1e9c76e1fac17547ed8ebe4aedf6053fe98f_1100.jpg" alt="© 김성빈" />
  `;
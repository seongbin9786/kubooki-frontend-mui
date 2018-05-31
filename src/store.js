import User from './User';

export const globalUser = new User('김성빈', 'MANAGER');

export const article = {
  id: 1,
  title: '이용 약관',
  content: `
    <h3>경기대학교 웹지 거북이에 오신 것을 환영합니다.</h3>
      <p>거북이 제품 및 서비스(‘서비스’)를 이용해 주셔서 감사합니다.
      서비스는 경기대학교 수원캠퍼스 신학관 508호(5층)에서 제공합니다.</p>
    `,
  creationDate: '30.05.2018',
  lastUpdateDate: '30.05.2018',
  category: '이용 약관',
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
    title: '경기대생 계절밥상 수원갤러리아점 할인 이벤트',
    thumbnail: 'https://www.kyonggiup.com:40220/files/attach/images/18011/822/672/005/162c900735d64d11d4ef499543774448.jpg',
    startDate: '16.10.2017',
    endDate: '25.05.2018',
    prize: '방문 시 할인',
    resultDate: '-',
  },
  {
    id: '2',
    title: '경기대생 제휴 영월 동강 래프팅 이벤트',
    thumbnail: 'https://www.kyonggiup.com:40220/files/attach/images/18011/098/365/005/0ee6654d14f45737742beb540c9bee6a.jpg',
    startDate: '18.06.2017',
    endDate: '25.05.2018',
    prize: '1인 49,000 할인',
    resultDate: '-',
  },
  {
    id: '3',
    title: '봄!봄!봄!의 3가지 테마를 맞춰주세요!',
    thumbnail: 'https://www.kyonggiup.com:40220/files/attach/images/18011/193/273/005/44eb6efd949eae4c8815f94d04253d2d.jpg',
    startDate: '20.05.2018',
    endDate: '24.05.2018',
    prize: '푸드트럭 이용권',
    resultDate: '25.05.2018',
  },
  {
    id: '4',
    title: '경기대생 계절밥상 수원갤러리아점 할인 이벤트',
    thumbnail: 'https://www.kyonggiup.com:40220/files/attach/images/18011/822/672/005/162c900735d64d11d4ef499543774448.jpg',
    startDate: '16.10.2017',
    endDate: '25.05.2018',
    prize: '방문 시 할인',
    resultDate: '-',
  },
  {
    id: '5',
    title: '경기대생 제휴 영월 동강 래프팅 이벤트',
    thumbnail: 'https://www.kyonggiup.com:40220/files/attach/images/18011/098/365/005/0ee6654d14f45737742beb540c9bee6a.jpg',
    startDate: '18.06.2017',
    endDate: '25.05.2018',
    prize: '1인 49,000 할인',
    resultDate: '-',
  },
  {
    id: '6',
    title: '봄!봄!봄!의 3가지 테마를 맞춰주세요!',
    thumbnail: 'https://www.kyonggiup.com:40220/files/attach/images/18011/193/273/005/44eb6efd949eae4c8815f94d04253d2d.jpg',
    startDate: '20.05.2018',
    endDate: '24.05.2018',
    prize: '푸드트럭 이용권',
    resultDate: '25.05.2018',
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
    content: '댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1 댓글 테스트 1'
  },
  {
    id: '2',
    date: '2주 전',
    likes: '5',
    targetNews: 1,
    content: '댓글 테스트 2'
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
  category: '경기소식',
  title: '경기대학교 신입생들을 위한 새내기팁! 첫 번째, 통학버스와 고양이버스 안내',
  writer: '김성빈',
  lastUpdatedDate: '18.05.2018',
};

export const newsDetailPageParagraphs = [
  'When French photographer <a href="http://www.raphaelolivier.com/">Raphael Olivier</a> decided to make a flying visit to North Korea in 2015, he had no expectations about the secretive nation; he was living in nearby Shanghai at the time and just happened to find a cheap ticket online and thought, why not? After just 24 hours wandering around Pyongyang, he was hooked.',
  '"This express dip into the \'North\' suddenly opened my eyes beyond anything I would have ever imagined," Raphael told Creative Boom. "The place actually fascinated me, everything about it was amazing. So much so that the next year, I decided to return for a longer trip in order to get a chance to see and understand more about this country so often misjudged."',
  'One of the most obvious aspects of Pyongyang which immediately caught his attention was its "retro vibe and architecture". Which is why, during his second visit, he aimed to photograph its unique urban landscape. Through this series, many of the buildings he captured have a very strong Soviet modernist influence with a distinctive Korean style of their own.',
  '"As opposed to many cities, which are now starting to look all the same worldwide, Pyongyang sees very little advertising or visual pollution, offering the visitor a very raw display of its urban form," Raphael adds. "To this day, Pyongyang is still one the most memorable places I have ever visited and, regardless of anyone\'s opinion on political or economic matters, I think it\'s fair to say that everyone visiting Pyongyang is left impressed by the city\'s strong and proud character.',
  '"My images are only a glimpse into a world that seems so distant yet so real, but I encourage anyone curious about the DPRK to go and visit to make an idea for themselves." Discover more at <a href="http://www.raphaelolivier.com/urban/documentary/photographer/north-korea/pyongyang/vintage/socialist/architecture/">raphaelolivier.com</a>.'
];

export const newsDetailpageImages = [
  'https://www.creativeboom.com/uploads/articles/d3/d3fc5dad8dc02436fcf204469355b3c771c94402_1100.jpg',
  'https://www.creativeboom.com/uploads/articles/10/1087391e8fa7196b091ef219c859d26a28a84b40_1100.jpg',
  'https://www.creativeboom.com/uploads/articles/6c/6cd1f8b0e5c7be298ab56420ae842d91e8c761cb_1100.jpg',
  'https://www.creativeboom.com/uploads/articles/bd/bdfd408afb7bc318e152cf5cb07b0b0add3cc2d7_1100.jpg',
  'https://www.creativeboom.com/uploads/articles/17/17cf1e9c76e1fac17547ed8ebe4aedf6053fe98f_1100.jpg',
  'https://www.creativeboom.com/uploads/articles/2d/2d72e08c9215f58273c770041c4e8d729a0f6882_1100.jpg',
  'https://www.creativeboom.com/uploads/articles/e8/e89172119556fa2cd44205b1f7fc3218546ea517_1100.jpg',
  'https://www.creativeboom.com/uploads/articles/b2/b2b98457b1f500734675ba83f1ba1b37a9dffc11_1100.jpg',
  'https://www.creativeboom.com/uploads/articles/d6/d6a4fd8c121eeae92d1d346d1b118403cc0ebb0d_1100.jpg'
];
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';

// Action Types
const LOAD_NEWS_DETAIL = '@@kubooki/news/LOAD_NEWS_DETAIL';
const LOAD_NEWS_LIST = '@@kubooki/news/LOAD_NEWS_LIST';
const POST_NEWS_SUCCESS = '@@kubooki/news/POST_NEWS_SUCCESS';
const POST_NEWS_FAILED = '@@kubooki/news/POST_NEWS_FAILED';

// Action(Thunk) Creators
export const loadNewsDetail = id => {
  return dispatch => {
    axios.get(`${ROOT_URL}/news/${id}`)
      .then(({ data }) => {
        dispatch({
          type: LOAD_NEWS_DETAIL,
          payload: data
        });
      });
    // 예외처리 아직 안함
  };
};

export const loadNewsList = (offset, limit) => {
  return dispatch => {
    axios.get(`${ROOT_URL}/news?offset=${offset}&limit=${limit}`)
      .then(({ data }) => {
        dispatch({
          type: LOAD_NEWS_LIST,
          payload: data
        });
      });
    // 예외처리 아직 안함
  };
};

export const postNews = news => {
  return dispatch => {
    axios.post(`${ROOT_URL}/news`, news)
      .then(({ data }) => {
        dispatch({
          type: POST_NEWS_SUCCESS,
          payload: data
        });
      })
      .catch(({ response: { status } }) => {
        dispatch({
          type: POST_NEWS_FAILED,
          payload: status
        });
      });
  };
};

// initialState
const initialState = {
  list: [],
  detail: {}
};

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_NEWS_DETAIL: {

    const { id } = action.payload;

    return {
      ...state,
      detail: {
        ...state.detail,
        [id]: action.payload
      }
    };
  }

  case LOAD_NEWS_LIST: {
    return {
      ...state,
      list: [
        ...state.list,
        ...action.payload
      ]
    };
  }

  case POST_NEWS_SUCCESS: {
    alert('뉴스 게시에 성공했습니다: ' + action.payload);
    return state;
  }

  case POST_NEWS_FAILED: {
    alert('뉴스 게시에 실패했습니다: 에러 코드 ' + action.payload);
    return state;
  }

  default:
    return state;
  }
}

// Selectors
export const getNewsListByOffsetAndLimitAndCategory = ({ list }) => (newsCategory, offset, limit) => {
  if (newsCategory === 'ALL')
    return list.slice(offset, offset + limit);

  return list.filter(li => li.newsCategory === newsCategory).slice(offset, offset + limit);
};

export const getNewsList = ({ list }) => list;//(offset, limit) => list.slice(offset, offset + limit);

export const getNewsDetailById = ({ detail }) => id => detail[id];
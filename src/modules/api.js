import axios from 'axios';
import { sessionService } from 'redux-react-session';

import { validateSession } from './SessionActions';
import { ROOT_URL } from '../configs/ServerConfig';

const myAxios = axios.create({
  baseURL: ROOT_URL
});

// axios global config
export const setContentType = () => {
  myAxios.defaults.headers.post['Content-Type'] = 'application/json';
};

export const setJwtInterceptor = () => {

  const onFulfilled = AxiosRequestConfig => {
    // TODO 1: headers에서 AUTHORIZATION이 있는지 확인 (없다면 GUEST)
    console.log('AxiosRequestConfig:', AxiosRequestConfig);

    const { headers } = AxiosRequestConfig;
    const AUTHORIZATION = 'AUTHORIZATION';
    const accessTokenFromHeader = headers[AUTHORIZATION];
    if (!accessTokenFromHeader)
      return AxiosRequestConfig; // 반환하는 config 값으로 request하는 듯!

    // return Promise.resolve(config)와 같이 반환할 수 있음.
    // TODO 2: AUTHORIZATION 헤더를 검증함
    // loadSession 사용
    return sessionService.loadSession
      .then(({ accessToken, refreshToken }) => validateSession(accessToken, refreshToken)
        .then(isValidated => {
          if (!isValidated) {
            throw Error('로그인이 필요합니다.');
          }
          return AxiosRequestConfig;
        })
        .catch(f => f)); // TODO 3: 로그아웃 화면으로 이동
  };

  // TODO 3: 오류 발생 시 how...?
  const onRejected = error => console.log('error:', error);

  myAxios.interceptors.request.use(onFulfilled, onRejected);

};

export const setAccessTokenForAuthorizationHeader = accessToken => {
  myAxios.defaults.headers.common['Authorization'] = accessToken;
};

export default myAxios;

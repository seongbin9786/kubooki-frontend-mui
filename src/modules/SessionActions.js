import decodeJwt from 'jwt-decode';
import { sessionService } from 'redux-react-session';
import api, { setAccessTokenForAuthorizationHeader } from './api';
import SocialSessionPreProcessor from '../utils/SocialSessionPreProcessor';

/**
 * ID, PW로 로그인 시 사용할 Action이다.
 * Local 계정으로 로그인 시 사용한다.
 * 소셜 로그인의 경우 `loginWithSocial`을 import하여 사용해야 한다.
 * 
 * @param {string} id 아이디
 * @param {string} pw 비밀번호
 */
export const loginWithIdAndPw = ({ loginId, password }) => {
  return () => {
    return new Promise((resolve, reject) => {

      const loginDTO = {
        id: loginId,
        pw: password
      };

      console.log('loginDto:', loginDTO);

      api.post('/login', loginDTO)
        .then(({ status, data }) => {
          console.log('loginResponse:', status, data);

          setAccessTokenForAuthorizationHeader(data.accessToken);

          sessionService.saveSession(data)
            .then(() => sessionService.saveUser(data))
            .then(() => resolve())
            .catch(() => reject());
        })
        .catch(() => reject());
    });
  };
};

/**
 * 클라이언트-사이드에서 가져온 엑세스 토큰으로 로그인 시 사용할 Action이다.
 * 네이버, 카카오, 페이스북 등의 Social 계정으로 로그인 시 사용한다.
 * Local 계정으로 로그인 시에는 `loginWithIdAndPw`를 사용한다.
 */
export const loginWithSocial = (type) => {
  return () => {
    return new Promise((resolve, reject) => {
      // process 과정 필요
      SocialSessionPreProcessor.preProcessLogin(type)
        .then(accessToken => {

          api.post('/login/social', {
            accountType: type,
            accessToken
          }).then(({ status, data }) => {
            console.log('[loginSocial] status:', status, ' data:', data);

            setAccessTokenForAuthorizationHeader(data.accessToken);

            sessionService.saveSession(data)
              .then(() => sessionService.saveUser(data))
              .then(() => resolve())
              .catch(() => reject());
          }).catch(({ response: { status } }) => {
            if (status === 404) {
              reject({
                status,
                type,
                accessToken,
                msg: '소셜 사용자 최초 로그인 - 추가 정보 입력이 필요합니다.'
              });
            } else {
              // 다른 status가 나오는 경우는 Bad Request
              reject({ status, msg: '잘못된 요청입니다.' });
            }
          });
        });
    });
  };
};

export const logout = () => {
  return () => {
    sessionService.loadUser()
      .then(({ user: { accountType } }) => {

        if (accountType !== 'LOCAL')
          SocialSessionPreProcessor.preProcessLogout(accountType);

        sessionService.deleteSession();
        sessionService.deleteUser();
      });
  };
};

/**
 * 세션 값을 검증하는 함수이다.
 * 최초 로딩 시 저장되어있던 세션을 불러올 때 호출된다.
 * 
 * @param {object} session 현재 세션에 저장되어있는 객체
 * @returns {boolean | Promise} 세션 값이 정상적인지 여부를 반환한다.
 */
export const validateSession = ({ accessToken, refreshToken }) => {

  const { accessTokenExpired, refreshTokenExpired } = calculateExpirated(accessToken, refreshToken);

  console.log('validateSession: ', accessTokenExpired, refreshTokenExpired);

  // Access Token이 만료되지 않았으므로 그대로 사용
  if (!accessTokenExpired) {
    console.log('accessToken is not expired');
    setAccessTokenForAuthorizationHeader(accessToken);
    return true;
  }

  console.log('accessToken is expired');

  // Refresh Token이 만료된 시점에서 Access Token이 만료되지 않았을 리 없음
  if (refreshTokenExpired) {
    console.log('refreshToken is expired');
    return false;
  }

  console.log('refreshToken is not expired');

  // Refresh Token으로 갱신해야 함
  return tryRefresh(refreshToken)
    .then(data => {
      sessionService.deleteSession()
        .then(() => sessionService.saveSession(data))
        .then(() => sessionService.saveUser(data))
        .then(() => { console.log('saveUser succeded'); return true; })
        .catch(() => false);
    })
    .catch(() => false);
};

const tryRefresh = refreshToken => {
  console.log('trying to refresh...');

  const formData = new FormData();
  formData.append('token', refreshToken);

  return new Promise((resolve, reject) => {

    console.log('about to send axios post');

    api.post('/refresh', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(({ status, data }) => {
        console.log('POST /refresh ----> status:', status, ', data: ', data);
        setAccessTokenForAuthorizationHeader(data.accessToken);
        resolve(data);
      })
      .catch(() => reject());
  });
};

// private method
const calculateExpirated = (accessToken, refreshToken) => {
  const { exp: accessTokenExp } = decodeJwt(accessToken);
  const { exp: refreshTokenExp } = decodeJwt(refreshToken);

  const currentTime = Date.now().valueOf() / 1000;

  const accessTokenExpired = accessTokenExp < currentTime;
  const refreshTokenExpired = refreshTokenExp < currentTime;

  return { accessTokenExpired, refreshTokenExpired };
};

// Selectors
export const getUserInfo = ({ user: { user } }) => user;

export const getUserLoggedIn = ({ user: { user } }) => user !== undefined && user !== null && !(Object.keys(user).length === 0 && user.constructor === Object);

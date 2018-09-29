import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';

/**
 * Register 모듈은 Redux를 사용하지 않는다.
 */
class Register {
  /**
   * LOCAL 계정을 새로 생성한다.
   * 회원가입 시 유저정보와 성공 여부를 반환한다.
   * 
   * @param {object} registerForm 회원가입 폼 데이터
   */
  registerLocal = registerForm => {
    console.log('registerForm: ', registerForm);

    return new Promise((resolve, reject) => {

      const request = {
        idForLogin: registerForm.registerId, // registerId
        accountType: 'LOCAL',
        password: registerForm.password,
        name: registerForm.name,
        belongTo: registerForm.belongTo, // college 값
        identityType: registerForm.identityType, // 신분 (학생, 학부모 등)
      };

      axios.post(`${ROOT_URL}/users`, request)
        .then(({ status }) => {
          if (status === 200)
            resolve({ id: registerForm.registerId });
          else
            reject('회원가입에 실패하였습니다.');
        })
        .catch(() => reject('회원가입에 실패하였습니다.'));

    });
  };

  registerSocial = (type, accessToken, registerForm) => {
    console.log('registerForm: ', registerForm);

    return new Promise((resolve, reject) => {

      const request = {
        accountType: type,
        name: registerForm.name,
        belongTo: registerForm.belongTo, // college 값
        identityType: registerForm.identityType, // 신분 (학생, 학부모 등)
      };

      const accessTokenEncoded = encodeURIComponent(accessToken);

      axios.post(`${ROOT_URL}/users/social/${type}/${accessTokenEncoded}`, request)
        .then(({ status }) => {
          if (status === 200)
            resolve('회원가입에 성공했습니다.');
          else
            reject('회원가입에 실패하였습니다.');
        })
        .catch(() => reject('회원가입에 실패하였습니다.'));

    });
  };

}

export default new Register();
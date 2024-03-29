# 설계 메모장

설계에 필요한 생각들을 모아두는 메모장임

## 현재 작업해야 할 순서

1. Form Validation 구현 (v) - Async Validation까지 구현 (v)

2. Redux에 저장할 정보 구분

3. Container, Presentational Component로 리팩토링

4. Ducks 패턴 적용하여 Module 단위로 제작하기 - 기존 프로젝트 참고

5. Redux에서 API Call 적용

6. User 관련해서 `redux-react-session` 적용 (v)

7. 권한 정의 및 `<HasPermission>` 적용

8. 소셜 로그인

9. 자동 로그인 및 비자동 로그인의 flow 구현

10. FabNav 위치 가변적 지정

### API Call

- axios 사용 시 200번대 응답이 아니면 then이 아닌 catch로 들어가게 된다. 이 때 401을 어떻게..하

### Form

- 현재처럼 Material-UI 기반의 컴포넌트 + Quill + 내맘대로 컴포넌트를 렌더링할 수 있도록 직접 구현한 `renderField()`를 사용해야 될 듯

#### 필드 구성에서 required와 hidden, defaultValueFixed 필요함

#### 폼 작성 완료 시 폼 내용은 clear 해야 함

#### Form Validation의 구현에 대해서

- 그래서 Validation과 Error 표시를 직접해야 된다.
- Material-UI의 컴포넌트는 `error` prop을 전달하면 알아서 빨간줄로 변경된다.
- Material-UI의 inpt 바로 아래 Text로 부연설명하는 `<FormHelperText>` 컴포넌트도 있다. 
- Validation 함수만 받으면 onBlur (onFocus와 반대의 이벤트) 시와 onChange시에 점검하면 된다.

##### Async Field Validation 구현에 대해서 (완료)

- 현재 Sync Validation 밖에 안 된다. renderField 도중 값을 받아와서 error, msg를 표시하는 방식이기 때문이다.
- Async Validation이 가능하려면, onBlur나 onChange 시에 `setState({ })`가 가능하므로 해당 이벤트 핸들러에서 처리해야 한다.
- value 뿐만 아니라 error, msg, 등 렌더링에 필요한 요소들을 `state`에서 직접 관리하게 되면, onChange 및 onBlur에서 validation의 실행이 가능하다.
- 문제는, 이 때 object의 nested level이 깊어져서 setState 시에 훨씬 복잡하게 된다. (ImmutableJs를 써야 하나...)
- state에서 관리할 객체의 형태 예시이다

  ```js
  this.registerFields({
    title: {
      label: '제목',
      validate: this.validateByMinLength('제목', 10),
      value: '',
    },
    content: {
      Component: 'quill',
      label: '본문',
      value: '',
    },
  });

  [실제로 생성될 state 객체]: {
    fields: {
      title: { // name을 Object의 key로 사용
        label: '제목', // label을 그대로 사용
        Component: TextField, // 생략 가능
        type: 'text', // 생략 가능
        value: '',
        error: false,
        msg: '',
        validate: f => f,
        show: true,
        disabled: false,
        name,
        ...그외다수Prop
      },
    }
  }

  // 이후 submit 시 전달할 Object
  this.getValues() : {
    title: '',
    content: '',
  }
  ```

#### 자동 저장 기능 구현에 대해서

- entityType을 Dialog에서 지정해야 한다.
- 임시저장 기능에 넘길건 딱 두가지이다. `submit 시의 JSON`과 `entityType`이다.
- 자동 저장 기능 Action 정의

  ```js
  // 저장 시
  AutoSaveActions.save(entityType, json);

  // 불러오기 시
  const json = AutoSaveActions.load(entityType);
  ```

### Redux

#### 리덕스의 비즈니스 로직을 담는 부분

- 리덕스 사용 시 Action Type, Action Creator, Reducer, Selector를 정의해야 한다.
- 비동기 작업 시 `PENDING`, `FULFILLED`, `REJECTED` 등의 상태를 관리하여 로딩, 성공, 실패 시의 처리 또한 해야한다.
- Reducer는 순수함수여야 하기 때문에, 같은 input(매개변수에 한정)에 대해선 어느 상황이더라도 같은 output을 내야 한다.
- 따라서 비동기 작업은 주로 Thunk Creator에서 실행하고, 로딩, 성공, 실패의 Action을 객체로 dispatch하게 된다.

#### Container, Presentational

- 리덕스 사용 시 Redux와 connect되는 Container와 Container로부터 props를 전달받기만 하는 Presentational로 컴포넌트를 분리하게 된다.
- 이 때 Presentational이나 Container 이더라도 local state(?)는 유지할 수 있다. Redux는 전역 상태 관리 시 적절하기 때문이다.

##### Container vs Presentational - 컴포넌트 분리 시의 핵심

- 역할 분리를 통한 단순화와 재사용성 증대가 핵심
- 단순화 시 이해가 쉬워져 유지보수의 난도가 크게 낮아지는 장점이 있고,
- 재사용을 하기 더 쉬워지는 경우 중복 제거를 통한 유지보수의 난도가 낮아지는 장점이 있다.

##### Container AND Presentational - 컴포넌트 분리 전략 - 어떤 기준으로 코드를 분리할까?

- 작성중

#### Floating Action Buttons Nav의 위치 제어하기 - Redux 미사용!

##### 1안 (어쩔 수 없이 1안으로 해야한다.)

- 대시보드 페이지에 들어가는 경우 FAB이 Bottom Navigation을 가리는 문제가 생긴다.
- 이걸 해결하기 위해 LOW와 HIGH 모드를 추가해야 한다.
- `Layout.js`에서 `<FabNav />`를 렌더링하므로 mode 값을 넘기면 될 듯 하다. (각 Route 마다 다름)
- `RouteFabNavModeMapping.js`에 각 Route의 `path`와 `mode`를 매핑한 후 렌더링하면 될 듯 하다.

##### 2안

- **아, 문제를 발견했다. 항상 Navigation이 존재하진 않는다...**
- 또 다른 해결 방안은 애초에 Bottom Navigation을 사용하는 것이다.
- 현재 카카오톡, 유튜브 등이 Bottom Navigation을 적용하고 있는데, 덕분에 적응하는 데 필요한 불편함은 감소될 것 같다.
- 또한 Bottom Navigation을 매 Route 마다 체크하여 유지할지 말지 선택하여 렌더링할 필요도 없으므로 적절하다.

#### Redux 사용 시 캐싱에 대하여

- 이미 요청한 데이터의 경우 캐싱하여 사용하는 것도 좋다. 그러나 `redux-persist`의 사용법이 너무 어려운 것 같다.
- 일단 localStorage를 직접 사용하는 것부터 공부하는 것도 좋을 듯.
- sessionStorage라는 것도 있음. 이건 웹 브라우저의 Session이 끊기면 사라짐. JWT는 여기서 저장하는 게 좋을듯.
- 자동 로그인인 경우에만 localStorage에서 로그인하는 게 좋을듯.

#### Redux 사용 시 새로고침/새탭(창)에서열기 시 대응 방법

- Redux의 상태는 새로고침/새탭(창)에서열기 시에는 보존되지 않는다.
- 다만 컨텐츠 웹사이트 특성상 이 action을 자주 사용하게 될 수 있다.
- 가장 심각한 문제는 회원 상태가 유지되지 않는 것이다.
- 그 다음 문제가 이미 다운로드한 컨텐츠가 유지되지 않는 것이다.

##### 회원 상태 유지 문제

- 회원은 만약 자동 로그인을 사용하지 않는다면 sessionStorage가 로그아웃 과정을 구현하지 않아도 되므로 좋을 것 같다.
- 자동 로그인이냐 아니냐에 따라서 local vs session 사용 여부가 갈리게 된다.
- 좋은 Solution을 구했다. `redux-react-session`이라는 솔루션인데, 매우 가벼운 Service를 제공한다. localStorage로부터 사용자 데이터를 불러온다. 
- 예제 소스까지 있으므로 바로 분석 후 쉽게 적용 가능할 것 같다.
- `sessionService`를 거치기만 하면 된다. Redux에서는 `session` 값에 접근하면 된다.

##### 자동 로그인 문제

- refresh token의 문제인 것 같다.
- refresh token이 이후 접속 시에 사용 불가능해야 한다.
- 아래의 방법은 refresh token을 서버에서 강제로 revoke하지 않아도 되는 방법이다.
- 참고: refresh token은 사용될 때 마다 동일한 기간으로 연장되어 갱신된다.
- refresh token이 만료되는 경우 다시 로그인 해야 한다.

###### 자동 로그인인 경우 

- 6개월 정도의 long-term으로 refresh token을 발급한다. 
- setInterval 등의 방법으로 seamless하게 refresh 하지 않는다.

###### 자동 로그인이 아닌 경우

- access token의 시간을 10분으로 한정하고, refresh token의 시간을 20분으로 한정한다.
- 단순히 글쓰기를 하는 경우 20분 이상 아무 행동을 하지 않을 수도 있는데 어떻게 해야하지?
- 그런 경우를 위해서, 자동 로그인이 아닌 경우 setInterval을 걸면 될 것 같다. (19분 정도로)
- `session`과 유사한 `lifecycle`이 가능할 것으로 보인다.

##### 다운로드한 컨텐츠 유지 문제 (현재 고려 대상 아님.)

- localStorage를 직접 사용할 지 redux-persist를 사용할 지 아직은 모르겠다. 
- 다만 redux-persist는 Redux Store를 아예 저장하는 방식이라 부하가 심할 것 같다.
- localStorage를 직접 사용해야 할 것 같다.
- 다만 localStorage를 사용하는 것도 side effect라서 Thunk Creator로 처리해야 할탠데, 기존에 api access 하는 것에 너무 추가되면 복잡해질 것이 우려된다.
- **따라서 일단 api call만 하는 cycle로 구현을 완료한 이후 생각하려고 한다.**

#### 권한에 대하여

- React에서는 UI 권한을 다루게 된다. (메뉴 표시)
- 이 권한을 어떻게 관리할 지가 문제이다.
- JWT에 실려있는 authMap을 참조할 경우 `authMap['B1'][0] === '1'` 이렇게 비교해야 한다.
- 즉 SecurityRule, SecurityRepository, SecurityJudge가 프론트엔드에서도 필요하게 된다.
- 결국 JS에서도 권한 기반으로 가야한다.
- Role based로 가면 좋긴한데, 물론 지금은 RoleFactory로 사실상 Role based로 운영하고 있지만, Permission-based로 언제든 전환할 수 있다.
- 그렇게 되면 Permission이 훨씬 많더라도 유저의 Role에 권한이 축소되는 셈이 된다. 결국 프론트엔드에서도 측정해야 한다.
- 같은 Permission을 정의하더라도, condition이 달라지게 된다. 프론트엔드에선 JWT의 authMap을 재활용하면서 다른 조건을 확인해야 한다.

##### 권한 확인 방법 1안

- 권한 확인은 (targetObject, subject, PermissionName) => True/False 함수일 것 같다.
- 해당 작업은 Presentational에선 표시 여부를 Props으로 받고, Container에서 표시 여부를 계산해야 할 것 같다.

##### 권한 확인 방법 2안 (이 방법으로 하려고 거의 마음이 정해짐)

- 1안의 함수 기반 체크 방법을 컴포넌트로 가독성있게 살리는 방법이다.
- `<HasPermission target={targetObject} pName="ARTICLE_CREATE">{children}</HasPermission>`과 같이 컴포넌트를 사용한다.
- presentational component 안에서도 사용 가능하므로 container의 부담이 크게 줄 듯 하다.

##### 권한 확인 방법 3안

- `aspect.js`를 사용한다.
- class로 `Aspect`를 정의한다. 해당 Aspect에선 실행될 Advice와 Pointcut을 정의하게 된다. 
- Advice: 실행할 메소드 (invokeMethod)
- Pointcut: 시점 [ before/after/around/throw ] (+) 대상이되는 클래스, 메소드의 이름을 정규표현식으로 지정한다.
- Aspect가 적용되어야 할 클래스/메소드에 `@Wove`라는 어노테이션을 붙인다.
- `@Wove({ bar: 40 })`와 같이 매개변수를 넘길 수도 있다. 해당 매개변수는 Advice에서 Metadata라는 객체로 첫 번째 매개변수로 전달받을 수 있다.

#### 권한의 구현 방법에 대하여 (2안)

- HasPermission 컴포넌트가 필요하다.
- 관련 클래스 및 컴포넌트는 `/security` 폴더에 보관하면 될 듯.
- 구현 완료! (react-has-permission)

#### 권한의 정의 방법

- 보안 규칙은 authMap과 target에 접근할 수 있다.
- SpEL과 거의 비슷한 기능을 가지므로 (단, 외부 객체에 접근할 순 없음.) 유사하게 사용하면 될 듯 하다.
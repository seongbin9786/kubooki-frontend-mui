// TabName, TabURL
import AccountSettingsPage from './AccountSettingsPage';
import MyFavoriteNewsPage from './MyFavoriteNewsPage';

export default [
  ['나의 계정 설정', '/account/settings', AccountSettingsPage],
  ['내가 좋아한 기사', '/account/articles/liked', MyFavoriteNewsPage],
  ['내가 쓴 댓글', '/account/comments', null],
];
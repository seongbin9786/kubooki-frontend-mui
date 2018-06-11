// TabName, TabURL
import AccountSettingsPage from './AccountSettingsPage';
import MyFavoriteNewsPage from './MyFavoriteNewsPage';
import MyCommentPage from './MyCommentsPage';
import MyEventListPage from './MyEventListPage';

export default [
  ['나의 계정 설정', '/account/settings', AccountSettingsPage],
  ['내가 좋아한 기사', '/account/articles/liked', MyFavoriteNewsPage],
  ['내가 쓴 댓글', '/account/comments', MyCommentPage],
  ['내가 참여한 이벤트', '/account/events', MyEventListPage],
];

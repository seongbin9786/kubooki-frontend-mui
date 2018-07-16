import DashboardMainPage from '../pages/DashboardMainPage';
import NewsCorrectionPage from '../pages/NewsCorrectionPage';
import EventManagePage from '../pages/EventManagePage';
import PopupManagePage from '../pages/PopupManagePage';
import AttendanceManagePage from '../pages/AttendanceManagePage';

export default [
  {
    icon: 'bar_chart',
    title: '대시보드',
    link: '/dashboard',
    component: DashboardMainPage,
    role: 'TRAINEE'
  },
  {
    icon: 'create',
    title: '들어온 정정 요청',
    link: '/dashboard/corrections',
    component: NewsCorrectionPage,
    role: 'TRAINEE'
  },
  {
    icon: 'event',
    title: '이벤트 관리',
    link: '/dashboard/events',
    component: EventManagePage,
    role: 'JOURNALIST'
  },
  {
    icon: 'announcement',
    title: '팝업 관리',
    link: '/dashboard/popups',
    component: PopupManagePage,
    role: 'JOURNALIST'
  },
  {
    icon: 'portrait',
    title: '출석 관리',
    link: '/dashboard/attendance',
    component: AttendanceManagePage,
    role: 'MANAGER'
  },
];

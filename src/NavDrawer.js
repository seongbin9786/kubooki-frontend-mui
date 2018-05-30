import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FamilyLinks } from './FamilyLinkConfig';
import SearchBar from './SearchBar';

const styles = {
  list: {
    width: 250,
  },
};

function NavDrawer({
  classes,
  history,
  open,
  user,
  toggleDrawer,
  toggleLogin,
  toggleRegister,
  toggleSettings
}) {
  const kubooki = (
    <ListItem button onClick={() => history.push('/')}>
      <ListItemIcon aria-label="Menu">
        <i className="fas fa-lg fa-bars"></i>
      </ListItemIcon>
      <ListItemText primary="거북이" />
    </ListItem>
  );

  const apply = (
    <ListItem button onClick={() => history.push('/apply/form')}>
      <ListItemIcon>
        <i className="fas fa-lg fa-pencil-alt"></i>
      </ListItemIcon>
      <ListItemText primary="수습기자 지원" />
    </ListItem>
  );

  const settings = (
    <ListItem
      button
      onClick={toggleSettings}
    >
      <ListItemIcon>
        <i className="fas fa-lg fa-cogs"></i>
      </ListItemIcon>
      <ListItemText primary="설정" />
    </ListItem>
  );

  const families = (
    <List subheader={<ListSubheader>패밀리 사이트</ListSubheader>}>
      {FamilyLinks.map(([name, link], index) =>
        <ListItem button key={index} onClick={() => window.location = link}>
          <ListItemIcon>
            <i className="fas fa-lg fa-graduation-cap"></i>
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      )}
      <Divider />
    </List>
  );

  const accountList = (
    <List>
      <ListItem
        button
        onClick={toggleLogin}
      >
        <ListItemIcon>
          <i className="fas fa-lg fa-user-plus"></i>
        </ListItemIcon>
        <ListItemText primary="로그인" />
      </ListItem>

      <ListItem
        button
        onClick={toggleRegister}
      >
        <ListItemIcon>
          <i className="fas fa-lg fa-sign-in-alt"></i>
        </ListItemIcon>
        <ListItemText primary="회원가입" />
      </ListItem>
      <Divider />
    </List>
  );

  const guestList = (
    <List>
      <ListItem button onClick={() => history.push('/events')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-calendar-alt"></i>
        </ListItemIcon>
        <ListItemText primary="이벤트" />
      </ListItem>

      <ListItem button onClick={() => history.push('/faq')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-question-circle"></i>
        </ListItemIcon>
        <ListItemText primary="FAQ" />
      </ListItem>

      <ListItem button onClick={() => history.push('/terms')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-handshake"></i>
        </ListItemIcon>
        <ListItemText primary="이용 약관" />
      </ListItem>
      <Divider />
    </List>
  );

  const userList = (
    <List subheader={<ListSubheader>사용자 메뉴</ListSubheader>}>
      <ListItem button onClick={() => history.push('/news/report')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-plus"></i>
        </ListItemIcon>
        <ListItemText primary="기사 제보" />
      </ListItem>

      <ListItem button onClick={() => history.push('/inconveniences/report')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-exclamation-triangle"></i>
        </ListItemIcon>
        <ListItemText primary="불편 신고" />
      </ListItem>

      <ListItem button onClick={() => history.push('/news/corretions/create')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-check"></i>
        </ListItemIcon>
        <ListItemText primary="정정 요청" />
      </ListItem>

      <Divider />
    </List>
  );

  const trackList = (
    <List subheader={<ListSubheader>개인화 메뉴</ListSubheader>}>
      <ListItem button onClick={() => history.push('/news?sort=like')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-thumbs-up"></i>
        </ListItemIcon>
        <ListItemText primary="좋아한 기사" />
      </ListItem>

      <ListItem button onClick={() => history.push('/comments')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-comments"></i>
        </ListItemIcon>
        <ListItemText primary="내가 쓴 댓글" />
      </ListItem>

      <Divider />
    </List>
  );

  const journalistGroupList = (
    <List subheader={<ListSubheader>기자 메뉴</ListSubheader>}>
      <ListItem button onClick={() => history.push('/announcements')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-bullhorn"></i>
        </ListItemIcon>
        <ListItemText primary="공지 사항" />
      </ListItem>

      <ListItem button onClick={() => history.push('/news/write')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-pencil-alt"></i>
        </ListItemIcon>
        <ListItemText primary="기사 작성" />
      </ListItem>

      <ListItem button onClick={() => history.push('/dashboard')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-chart-bar"></i>
        </ListItemIcon>
        <ListItemText primary="대시 보드" />
      </ListItem>

      <ListItem button onClick={() => history.push('/news/corrections')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-check"></i>
        </ListItemIcon>
        <ListItemText primary="들어온 정정 요청" />
      </ListItem>

      <ListItem button onClick={() => history.push('/logs/meeting')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-comment-alt"></i>
        </ListItemIcon>
        <ListItemText primary="회의록" />
      </ListItem>

      <Divider />
    </List>
  );

  const journalistList = (
    <List subheader={<ListSubheader>정기자 메뉴</ListSubheader>}>
      <ListItem button onClick={() => history.push('/events/manage')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-wrench"></i>
        </ListItemIcon>
        <ListItemText primary="이벤트 관리" />
      </ListItem>

      <ListItem button onClick={() => history.push('/popups/manage')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-wrench"></i>
        </ListItemIcon>
        <ListItemText primary="팝업 관리" />
      </ListItem>

      <Divider />
    </List>
  );

  const managerList = (
    <List subheader={<ListSubheader>부장 메뉴</ListSubheader>}>
      <ListItem button onClick={() => history.push('/attendance/manage')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-user-tie"></i>
        </ListItemIcon>
        <ListItemText primary="출석 관리" />
      </ListItem>
      <Divider />
    </List>
  );

  const directorList = (
    <List subheader={<ListSubheader>국장 메뉴</ListSubheader>}>
      <ListItem button onClick={() => history.push('/journalists/manage')}>
        <ListItemIcon>
          <i className="fas fa-lg fa-users-cog"></i>
        </ListItemIcon>
        <ListItemText primary="기자 관리" />
      </ListItem>
      <Divider />
    </List>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer}
        >
          <div className={classes.list}>
            <SearchBar />
            {kubooki}
            {user.is('GUEST') ? accountList : null}
            {guestList}
            {user.is('USER') ? userList : null}
            {trackList}
            {user.isJournalistGroup() ? journalistGroupList : apply}
            {user.hasRole('JOURNALIST') ? journalistList : null}
            {user.hasRole('MANAGER') ? managerList : null}
            {user.hasRole('DIRECTOR') ? directorList : null}
            {families}
            {settings}
          </div>
        </div>
      </Drawer>
    </div >
  );
}

export default withStyles(styles)(withRouter(NavDrawer));

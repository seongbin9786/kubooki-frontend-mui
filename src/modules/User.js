import { hasHigherRole, hasJournalistRole, isNotGuestRole } from './RoleComparer';

const defaultProfileImg = 'http://sba.scfhs.org.sa/publiceservice_enu/CustomPages/Profileuploader/static/images/default.jpg';

class User {
  constructor(name, role, profilePic) {
    this.name = name;
    this.role = role;
    this.profilePic = profilePic || defaultProfileImg;
  }

  hasRole(reqRole) {
    return hasHigherRole(this.role, reqRole);
  }

  is(reqRole) {
    return this.role === reqRole;
  }

  isJournalistGroup() {
    return hasJournalistRole(this.role);
  }

  isLoggedIn() {
    console.log('isLoggedIn? ', isNotGuestRole(this.role));
    return isNotGuestRole(this.role);
  }

  getName() {
    return this.name;
  }

  getProfilePic() {
    return this.profilePic;
  }
}

export default User;
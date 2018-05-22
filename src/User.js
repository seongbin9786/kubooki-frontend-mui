import { hasHigherRole, isJournalistGroup } from './RoleComparer';

class User {
  constructor(name, role, depart) {
    this.name = name;
    this.role = role;
  }

  hasRole(reqRole) {
    return hasHigherRole(this.role, reqRole);
  }

  is(reqRole) {
    return this.role === reqRole;
  }

  is(reqRole, reqDepart) {
    return this.role === reqRole && this.depart === reqDepart;
  }

  isJournalistGroup() {
    return isJournalistGroup(this.role);
  }
}

export default User;
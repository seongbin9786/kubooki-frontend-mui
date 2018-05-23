import { hasHigherRole, hasJournalistRole } from './RoleComparer';

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

  isJournalistGroup() {
    return hasJournalistRole(this.role);
  }
}

export default User;
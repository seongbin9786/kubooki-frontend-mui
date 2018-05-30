const ROLES = [
  'GUEST',
  'USER',
  'TRAINEE',
  'JOURNALIST',
  'MANAGER',
  'MANAGER_EDIT_DEPART',
  'DIRECTOR',
  'ADMIN',
];

const idx = role => ROLES.findIndex(curr => curr === role);

export const hasHigherRole = (myRole, reqRole) => idx(myRole) >= idx(reqRole);
export const hasJournalistRole = myRole => idx(myRole) >= idx('TRAINEE');
export const isNotGuestRole = myRole => idx(myRole) > idx('GUEST');
import { UPDATE_USER_ROLE } from './constants';

/*
 *
 * Title: store actions
 * Description: sttore action
 * Author: Shah Arafat
 * Date: 17-04-2021
 *
 */
export const updateUserRoleOnStore = (id, role, state, dispatch) => {
  console.log(id, role, state, 'before');
  const updateList = {
    users: state.users.map((user) => (user._id === id ? { ...user, role: role } : user)),
  };

  dispatch({ type: UPDATE_USER_ROLE, payload: { users: updateList.users } });
  console.log(id, role, state, 'after');
};

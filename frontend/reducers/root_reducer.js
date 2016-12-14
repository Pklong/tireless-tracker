import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, nullUser, {
        currentUser,
      });
    case LOGOUT:
      return Object.assign({}, nullUser);
    default:
      return state;
  }
};

export default SessionReducer;

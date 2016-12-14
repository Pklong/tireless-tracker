import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(console.log(err.responseJSON)));
  };
}

export function login(user) {
  return (dispatch) => {
    return APIUtil.login(user)
      .then(user => {
        sessionStorage.setItem('jwt', user.jwt);
        return dispatch(receiveCurrentUser(user));
      },
            err => dispatch(console.log(err.responseJSON)));
  };
}

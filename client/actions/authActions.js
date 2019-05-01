import * as types from '../constants/actionTypes'


export const updateUsernameStr = (usernameStr) => ({
  type: types.UPDATE_USERNAME_STR,
  payload: usernameStr
});

export const updatePasswordStr = (passwordStr) => ({
  type: types.UPDATE_PASSWORD_STR,
  payload: passwordStr
});

export const isLogin = (bool) => ({
  type: types.IS_LOGIN,
  payload: bool
});

export const signupOnClick = (bool) => ({
  type: types.SIGNUP_ONCLICK,
  payload: bool
});

export const loginApi = (usernameStr, passwordStr) => {
  return function(dispatch, getState) {
    return fetch('http://localhost:300.login', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({"username": usernameStr, "password": passwordStr})
    })
    .then(response => response.json())
    .then(response => {
      if (response === 200) {
        dispatch(isLogin(true))
      }
    })
    .catch(err => console.log(err))
  }
}

export const signupApi = (usernameStr, passwordStr) => {
  return function(dispatch, getState) {
    return fetch('http://localhost:300.signup', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({"username": usernameStr, "password": passwordStr})
    })
    .then(response => response.json())
    .then(response => {
      if (response === 200) {
        dispatch(isLogin(true))
      }
    })
    .catch(err => console.log(err))
  }
}
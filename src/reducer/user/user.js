import {extend} from "../../common.js";
import createUserInfo from "../../adapter/user.js";
import {ActionCreator as DataActionCreator} from "../data/data.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {
    id: 0,
    email: ``,
    name: ``,
    avatar: ``,
  },
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZATION_INFO: `AUTHORIZATION_INFO`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  loadAuthorizationInfo: (info) => {
    return {
      type: ActionType.AUTHORIZATION_INFO,
      payload: info
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.loadAuthorizationInfo(createUserInfo(response.data)));
      })
      .catch((error) => {
        dispatch(DataActionCreator.catchError(error));

        throw error;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.loadAuthorizationInfo(createUserInfo(response.data)));
      })
      .catch((error) => {
        dispatch(DataActionCreator.catchError(error));

        throw error;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.AUTHORIZATION_INFO:
      return extend(state, {
        authorizationInfo: action.payload
      });
  }

  return state;
};


export {
  AuthorizationStatus,
  Operation,
  ActionCreator,
  ActionType,
  reducer,
};

const initialState = {
  token: '',
  isAuthenticated: false,
  isFetchAuth: false,

  isActiveLoginForm: true
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FIELD':
      const obj = {};
      obj[action.field] = action.value;
      return {
        ...state,
        ...obj,
      };
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        ...{ isAuthenticated: true }
      };
    }
    case 'SET_TOKEN':
      sessionStorage.setItem('token', action.token.token);
      const newState = {
        token: action.token,
        isAuthenticated: true
      };

      return {
        ...state,
        ...newState,
      };
    default:
      return state;
  }
}

const initialState = {
  token: '',
  isAuthenticated: false,
  isFetchAuth: false
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
    case 'SET_TOKEN':

      sessionStorage.setItem('token', action.token.token);

      return {
        ...state,
        ...action.token,
      };
    default:
      return state;
  }
}

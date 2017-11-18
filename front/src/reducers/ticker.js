export default function ticker(state = {}, action) {
  switch (action.type) {
    case 'RECEIVED_TICKER':
      return {
        ...state,
        ...action.ticker[0],
      };
    case 'FETCH_TICKER_ERROR':
      return [...state, { errors: action.err }];
    default:
      return state;
  }
}

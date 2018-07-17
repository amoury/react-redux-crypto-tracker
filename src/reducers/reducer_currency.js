import { FETCH_CURRENCY } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CURRENCY:
      console.log('Received', action);
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
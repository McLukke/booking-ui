import { getInitState } from 'utils/async-middleware';

import { actionTypes } from './actions';

const initState = getInitState({
  user: {},
});

export default (state = { ...initState }, action) => {
  switch (action.type) {
    case actionTypes.processLogin: {
      const { type, payload, ...restActions } = action;
      let { user } = state;

      if (payload && payload.data) {
        user = payload.data;
      }

      return {
        ...state,
        ...restActions,
        user,
      };
    }

    default:
      return state;
  }
};

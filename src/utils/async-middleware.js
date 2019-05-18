import axios from 'axios';

const isPromise = obj => Boolean(obj)
  && (typeof obj === 'object' || typeof obj === 'function')
  && Boolean(obj.then)
  && typeof obj.then === 'function';

export const getInitState = (info = {}) => ({
  isLoading: false,
  hasError: null,
  ...info,
});

export default ({ dispatch }) => next => (action) => {
  if (!isPromise(action.payload)) {
    return next(action);
  }

  dispatch({
    ...action,
    payload: null,
    isLoading: true,
    hasError: null,
  });

  return action.payload
    .then(payload => dispatch({
      ...action,
      payload,
      isLoading: false,
      hasError: null,
    }))
    .catch((error) => {
      if (!axios.isCancel(error)) {
        return dispatch({
          ...action,
          payload: null,
          isLoading: false,
          hasError: error.response || { message: error.message },
        });
      }

      return 'Request cancelled.';
    });
};

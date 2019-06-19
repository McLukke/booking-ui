const featureName = 'LOGIN';
export const actionTypes = {
  processLogin: `${featureName}/PROCESS_LOGIN`,
};

const mockPayload = {
  statusCode: 200,
  data: {
    fname: 'Kenny',
    lname: 'Luk',
    email: 'abc@test.com',
  },
};

export const processLogin = () => dispatch => dispatch({
  type: actionTypes.processLogin,
  payload: new Promise(res => setTimeout(() => res(mockPayload), 2500)),
});

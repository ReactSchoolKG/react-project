export const CHANGE = 'CHANGE';

export const changeCounter = value => {
  return dispatch => {
      dispatch({
        type: CHANGE,
        value
      })
  }
};

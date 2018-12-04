export const CHANGE = 'CHANGE';
export const CHANGE_ASYNC = 'CHANGE_ASYNC';
export const TOGGLE_DISABLED = 'TOGGLE_DISABLED';

export const changeCounter = value => ({
  type: CHANGE,
  value
});

export const toggleDisabled = () => ({
  type: TOGGLE_DISABLED
});

export const changeCounterAsync = value => {
  return dispatch => {
    dispatch(toggleDisabled());
    setTimeout(() => {
      dispatch(changeCounter(value));
      dispatch(toggleDisabled());
    }, 3000)
  }
};

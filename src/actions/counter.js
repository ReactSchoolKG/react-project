export const CHANGE = 'CHANGE';
export const ASYNC_CHANGE = 'ASYNC_CHANGE';
export const TOGGLE = 'TOGGLE_DISABLED';

export const changeCounter = value => ({
  type: CHANGE,
  value
});

export const toggleDisabled = () => ({
  type: TOGGLE
});

export const changeAsync = value => dispatch => {
  dispatch(toggleDisabled());

  setTimeout(() => {
    dispatch(changeCounter(value));
    dispatch(toggleDisabled());
  }, 2000)
};

import {CHANGE, TOGGLE_DISABLED} from "../actions/counter";

const initialState = { value: 0, disabled: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
          ...state,
          value: state.value + action.value
      };
    case TOGGLE_DISABLED:
      return {
          ...state,
        disabled: !state.disabled
      };
    default: return state;
  }
}

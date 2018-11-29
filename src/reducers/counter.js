import { CHANGE } from "../actions/counter";

const initialState = { value: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
          ...state,
          value: state.value + action.value
      };
    default: return state;
  }
}

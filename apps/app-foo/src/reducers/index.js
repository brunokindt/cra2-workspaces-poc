export const SHOW_MESSAGE = 'SHOW_MESSAGE';

const INITIAL_STATE = {
  value: 'initial',
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      const { value } = action;
      return {
        value,
        ...state,
      }
    default:
      return state;
  }
};

export { messages as default };


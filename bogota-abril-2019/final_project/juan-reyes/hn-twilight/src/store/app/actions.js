const NAME_SPACE = '@hnTwilight/app';

export const actionTypes = {
  SET_THEME: `${NAME_SPACE}/SET_THEME`,
};

const actions = {
  setTheme: (payload = {}) =>
    ({
      type: actionTypes.SET_THEME,
      payload
    }),
};

export default actions;
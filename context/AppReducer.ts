const AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SWITCH_STATE': {
      const exportDisabled = !!payload?.exportDisabled;
      return {
        ...state,
        exportDisabled,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;

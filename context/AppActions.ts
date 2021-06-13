const apiPath = '/api/configuration';

export const getSwitchStateAction = (dispatch) => async () => {
  const res = await fetch(apiPath, {
    method: 'GET',
  });
  const data = await res.json();
  dispatch({
    type: 'GET_SWITCH_STATE',
    payload: {
      exportDisabled: data.exportDisabled,
    },
  });
};

export const setSwitchStateAction = (dispatch) => async (exportDisabled) => {
  const res = await fetch(apiPath, {
    method: 'PUT',
    body: JSON.stringify({ exportDisabled }),
  });
  const data = await res.json();
  dispatch({
    type: 'UPDATE_SWITCH_STATE',
    payload: {
      exportDisabled: data.exportDisabled,
    },
  });
};

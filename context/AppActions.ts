const apiPath = process.env.apiPath;

export const getSwitchStateAction = (dispatch) => async () => {
  const res = await fetch(apiPath, {
    method: 'GET',
  });
  console.log(process.env.NODE_ENV);
  const data = await res.json();
  dispatch({
    type: 'UPDATE_SWITCH_STATE',
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

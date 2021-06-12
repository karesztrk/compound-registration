import { GetServerSideProps } from 'next';
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

interface AppState {
  exportDisabled: boolean;
  getSwitchStateAction: () => void;
  setSwitchStateAction: (exportDisabled) => void;
}

const initialState: any = {
  exportDisabled: false,
};

export const AppContext = createContext<AppState>(initialState);

const apiPath = 'http://localhost:3000/api/settings';

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getSwitchStateAction = async () => {
    const res = await fetch(apiPath, {
      method: 'GET',
    });
    const data = await res.json();
    dispatch({
      type: 'SET_SWITCH_STATE',
      payload: {
        exportDisabled: data.exportDisabled,
      },
    });
  };

  const setSwitchStateAction = async (exportDisabled) => {
    const res = await fetch(apiPath, {
      method: 'PUT',
      body: JSON.stringify({ exportDisabled }),
    });
    const data = await res.json();
    dispatch({
      type: 'SET_SWITCH_STATE',
      payload: {
        exportDisabled: data.exportDisabled,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        exportDisabled: state.exportDisabled,
        getSwitchStateAction,
        setSwitchStateAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

import { GetServerSideProps } from 'next';
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { getSwitchStateAction, setSwitchStateAction } from './AppActions';

interface AppState {
  exportDisabled: boolean;
  getSwitchState: () => void;
  setSwitchState: (exportDisabled) => void;
}

const initialState: any = {
  exportDisabled: false,
};

export const AppContext = createContext<AppState>(initialState);

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getSwitchState = getSwitchStateAction(dispatch);
  const setSwitchState = setSwitchStateAction(dispatch);

  return (
    <AppContext.Provider
      value={{
        exportDisabled: state.exportDisabled,
        getSwitchState,
        setSwitchState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

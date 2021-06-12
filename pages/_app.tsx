import { GeistProvider, CssBaseline, Themes } from '@geist-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createContext, FC } from 'react';
import AppContextProvider from '../context/AppContextProvider';

const baseTheme = Themes.createFromLight({
  type: 'Chemaxon',
  layout: {
    pageMargin: '10px',
  },
});

const theme = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    sideBarLinkColor: '#dfdfdf',
  },
};

const initialState = {
  exportDisabled: false,
};

export const AppContext = createContext(initialState);

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <GeistProvider themes={[theme]} themeType='Chemaxon'>
      <CssBaseline />
      <AppContextProvider>
        <Component key={router.route} {...pageProps} />
      </AppContextProvider>
    </GeistProvider>
  );
};

export default App;

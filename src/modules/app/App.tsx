import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core';
import customTheme from '../../theme/theme';
import Routes from '../../core/Routes';
import history from '../../store/utils/history';

const App: React.FC = () => (
  <div className="App">
    <ConnectedRouter history={history}>
      <ThemeProvider theme={customTheme}>
        <Routes />
      </ThemeProvider>
    </ConnectedRouter>
  </div>
);

export default App;
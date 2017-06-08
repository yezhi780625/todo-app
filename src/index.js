import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import './styles/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
  <Root />
  </MuiThemeProvider>,
  document.getElementById('root')
);

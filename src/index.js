import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import './styles/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
  <Root />
  </MuiThemeProvider>,
  document.getElementById('root')
);

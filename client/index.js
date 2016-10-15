/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { configureStore } from './store';

/**
 * Import global fonts
 */
//import FontAwesomeness from 'styles/nomodule/font-awesome.scss';
//import FontAwesomeness from 'fonts/font-awesome/scss/font-awesome.scss';
//import FontAwesomeness from 'fonts/font-awesome/css/font-awesome.css';
import FontAwesomeness from 'font-awesome/css/font-awesome.css';
console.log("FontAwesome direct=" + Object.keys(FontAwesomeness));
//import FontAwesomeness2 from 'font-awesome/scss/font-awesome.scss';
//console.log("FontAwesome node_modules=" + Object.keys(FontAwesomeness2));

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}

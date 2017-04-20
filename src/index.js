import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/root';

import configureStore from './store/configure-store';
// import './styles/styles.scss'; 
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('./styles/global.scss');
// require('roboto-fontface');
// This is required by Material-UI Library 
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    const NewRoot = require('./components/root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
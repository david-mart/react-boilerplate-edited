import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './shared/top-bar';
import muiTheme from '../constants/mui-theme';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <TopBar />
          <IndexLink to="/">Home</IndexLink>
          {' | '}
          <Link to="/dashboard">Dashboard</Link>
          {' | '}
          <Link to="/about">About</Link>
          <br/>
          {this.props.children}
        </div>
      </MuiThemeProvider>  
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
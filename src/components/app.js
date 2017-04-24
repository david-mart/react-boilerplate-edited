import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TopBar from "./shared/top-bar";
import SecondaryBar from "./shared/secondary-bar";
import muiTheme from "../constants/mui-theme";
import Paper from "material-ui/Paper";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Paper zDepth={1}>
            <TopBar />
            <SecondaryBar />
          </Paper>
          <div style={{ padding: '10px' }}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

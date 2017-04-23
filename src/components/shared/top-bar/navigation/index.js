import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import CSSModules from 'react-css-modules';
import styles from './navigation.scss';
class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tabs } = this.props;
    return (
      <div styleName="navigation-container">
        {tabs.filter(t => t.url !== '').map(t => (
          <Link key={t.url} to={`/${t.url}`} activeClassName="active">
            {t.label}
          </Link>
        ))}
      </div>
    );
  }
}

Navigation.propTypes = {
  tabs: PropTypes.array
};

export default CSSModules(Navigation, styles);

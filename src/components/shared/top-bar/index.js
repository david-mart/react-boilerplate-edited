import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./top-bar.scss";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import Logo from "./logo";
import FlexSeparator from "./../helpers/flex-separator";
import ActionItems from "./action-items";
import Navigation from "./navigation";
import { menuItems } from "../../../constants/navigation";

class TopBar extends Component {
  render() {
    return (
      <div styleName="top-bar-container">
        <IconButton>
          <FontIcon className="material-icons">menu</FontIcon>
        </IconButton>

        <Logo />

        <Navigation tabs={menuItems} />

        <FlexSeparator />

        <ActionItems />
      </div>
    );
  }
}

export default CSSModules(TopBar, styles);

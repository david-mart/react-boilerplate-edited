import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './secondary-bar.scss';
import FlexSeparator from './../helpers/flex-separator';
import ActionItems from './action-items';
import LibraryFilters from './library-filters';
import SearchBar from './search-bar';
class SecondaryBar extends Component {
    render() {
        return (
            <div styleName="secondary-bar-container">
                <span>Library</span>
                <LibraryFilters /> 
                <FlexSeparator />
                <SearchBar />
                <FlexSeparator />
                <ActionItems />
            </div>
        );
    }
}

export default CSSModules(SecondaryBar, styles);
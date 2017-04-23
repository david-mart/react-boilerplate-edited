import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './flex-separator.scss';

const FlexSeparator = () => {
    return (
        <div styleName="flex-separator" />            
    );
};

export default CSSModules(FlexSeparator, styles);
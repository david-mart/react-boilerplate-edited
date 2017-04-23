import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './logo.scss';

const Logo = () => {
    return (
        <div styleName="dotmaps-logo">
            <strong>react</strong>App
        </div>
    );
};

export default CSSModules(Logo, styles);
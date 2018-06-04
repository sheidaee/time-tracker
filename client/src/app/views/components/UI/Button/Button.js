import React from 'react';
import classes from './Button.scss';

const button = ({ children, clicked, btnType, disabled }) => (
    <button
        className={[classes.Button, classes[btnType]].join(' ')}
        disabled={disabled}
        onClick={clicked} >
        {children}
    </button>
);

export default button;

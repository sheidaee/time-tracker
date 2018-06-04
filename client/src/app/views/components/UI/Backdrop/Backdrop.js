import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.scss';

const backdrop = ({ show, clicked }) => (
    show ? <div 
                className={classes.Backdrop}
                onClick={clicked} ></div> 
    : null
);

const { bool, func } = PropTypes;

backdrop.propTypes = {
    show   : bool,
    clicked: func.isRequired
}

export default backdrop;

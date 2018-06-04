import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Column from './Column';
import Styles from './Grid.module.scss';
import { classNames } from "../../../../utilities";

/**
 * Grid system using float system
 * 
 * @class Grid
 * @extends {Component}
 */
class Grid extends Component {
    static displayName = 'Grid'

    static Column      = Column;

    static propTypes   = {        
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    }

    render() {
        const { children, classes } = this.props;        

        return <div className={classNames(classes, Styles.row)}>{children}</div>;
    }
}

export default Grid;
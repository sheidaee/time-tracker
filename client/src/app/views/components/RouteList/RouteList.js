import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteList = ({ routes }) => (
    routes.map(route => (
        <Route key={route.path} {...route} />
    ))
);

const { array } = PropTypes;

RouteList.propTypes = {
    routes: array.isRequired
}

export default RouteList;

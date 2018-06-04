import React from 'react';

import classes from './Spinner.scss';
import { dictionary } from '../../../../utilities';

const spinner = () => {
    return (
        <div className={classes.Loader}>{dictionary.loading}...</div>
    );
};

export default spinner;
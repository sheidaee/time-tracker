import React from 'react';
import Classes from './Column.module.scss';
import { classNames } from '../../../../../utilities';

const Column = ({ children, col, classes }) => {
  return <div className={classNames(Classes[col], classes)}>{children}</div>;
};

export default Column;
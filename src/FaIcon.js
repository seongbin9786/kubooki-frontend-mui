import React from 'react';
import classNames from 'classnames';

export default ({ sm, type, ...props }) => <i className={classNames([`fas fa-${sm ? 'sm' : 'md'} fa-${type}`, props.className])}></i>;
import React from 'react';
import classNames from 'classnames';

export default ({ icon, ...props }) => {
  const command = icon.split(/-(.+)/);
  // - 가 없는 경우 무조건 size 가 없다.
  if (command.length === 1)
    return <i className={classNames([`fas fa-${icon}`, props.className])}></i>;

  // - 가 있는 경우에도 size가 없을 수 있다.
  let [size, type] = command;
  const showSize = checkSizeSpecified(size);
  const faClassName = `fas ${showSize ? 'fa-' + size : ''} fa-${showSize ? type : icon}`;

  return <i className={classNames([faClassName, props.className])}></i>;
};

const sizeAttributes = [
  'xs',
  'sm',
  // md는 없음
  'lg',
  '2x',
  '3x',
  '5x',
  '7x',
  '10x',
];

const checkSizeSpecified = (sizeStr) => sizeAttributes.includes(sizeStr);
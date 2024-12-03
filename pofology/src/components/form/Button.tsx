import classNames from 'classnames';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  onClick?: ()=>void
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, onClick }) => {
  console.log('onlick', onClick);
  return (
    <button type={type} className={classNames(['btn', className])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

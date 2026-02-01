import React from 'react';
import css from './Error.module.css';
import Button from '../../fragments/Button/Button.jsx';

const Error = ({ onRetry }) => {
  return (
    <div className={css.error_container}>
      <h2 className={css.error_title}>Something went wrong</h2>
      {onRetry && (
        <Button text="Try again" onClick={onRetry} variant="secondary" />
      )}
    </div>
  );
};

export default Error;

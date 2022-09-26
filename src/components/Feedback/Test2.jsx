import React from 'react';
import css from './Test.module.css';

export const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.Counter__controls}>
    <button type="button" className={css.button} onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" className={css.button} onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);

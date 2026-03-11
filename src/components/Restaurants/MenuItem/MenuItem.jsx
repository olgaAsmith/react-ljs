import { useState } from 'react';

export const MenuItem = ({ name }) => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const removeOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h4>{name}</h4>
      <button type='button' onClick={removeOne} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button type='button' onClick={addOne} disabled={count === 5}>
        +
      </button>
    </div>
  );
};

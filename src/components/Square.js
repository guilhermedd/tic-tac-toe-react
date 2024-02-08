import '../App.css';
import '../index.css';
import { useState } from 'react';
export default function Square({index}) {
  function handleClick(value) {
    console.log(value);
  }

  const [value, setValue] = useState(null);

  return (
    <button
      className="square"
      onClick={(() => handleClick(index))}
    >
      {index}
    </button>
  );
}
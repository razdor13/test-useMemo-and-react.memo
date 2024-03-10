import React from 'react';

let renderCount = 0;

export default React.memo(
  function IsFive({ value }) {
    console.warn(`🔴 isFive render: ${++renderCount}`);

    const getResult = React.useMemo(() => {
      let i = 0;
      while (i < 600000000) i++;
      return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
    }, [value]);

    return <h3>{getResult}</h3>;
  },
  (prevProps, nextProps) => {
    if (nextProps.value === 5 || nextProps.value === 6) {
      return false; // Рендерити, якщо значення дорівнює 5 або 6
    } else {
      return true; // Не рендерити у всіх інших випадках
    }
  },
);

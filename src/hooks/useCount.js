import { useEffect, useState } from "react";

const useCount = (countNumber) => {
  const [count, setCount] = useState(0);

  const easeOutExpo = (x) => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  useEffect(() => {
    let times = 0;
    const interval = 2000 / 120;
    const totalTimes = 120;
    const countFastTime = setInterval(() => {
      times++;
      const currentCount = Math.round(
        easeOutExpo(times / totalTimes) * countNumber
      );

      if (countNumber >= currentCount) {
        setCount(currentCount);
      }
      if (times === totalTimes) {
        clearInterval(countFastTime);
      }
    }, interval);
    return () => {
      clearInterval(countFastTime);
    };
  }, [countNumber]);

  return count;
};

export default useCount;

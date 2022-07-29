import { useState } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState<number>();

  const countup = () => {
    setTime((time) => time + 1);
  };

  const start = () => {
    if (!timerId) {
      setTimerId(window.setInterval(countup, 1000));
    }
  };

  const stop = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(undefined);
    }
  };

  return { time, start, stop };
};

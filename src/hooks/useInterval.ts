import { useEffect, useRef, useState } from 'react';

interface UseIntervalProps {
  delay: number;
  clearTime?: number;
}

interface UseIntervalType {
  time: number;
}

const useInterval = ({ delay, clearTime }: UseIntervalProps): UseIntervalType => {
  const [time, setTime] = useState(0);
  const interval = useRef(undefined);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime((t) => t + delay);
    }, delay * 1000);

    return () => clearInterval(interval.current);
  }, [delay]);

  useEffect(() => {
    if (clearTime && time > clearTime) {
      clearInterval(interval.current);
    }
  }, [time]);

  return { time };
};

export default useInterval;

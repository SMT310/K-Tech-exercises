import React, { useEffect, useState } from 'react'

export default function useClock(): string {
  const [time, setTime] = useState<string>(() => {
    return new Date().toLocaleTimeString("vi-VN", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
}

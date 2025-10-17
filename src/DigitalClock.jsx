import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // const updateTime = () => {
    //   setTime(new Date());
    // };

    // setInterval(setInterval(updateTime, 1000));
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = time.getHours() > 11 ? "PM" : "AM";

    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    } ${meridiem}`;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        {/* <span>00:00:00</span> */}
        {/* <span>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span> */}
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}

export default DigitalClock;

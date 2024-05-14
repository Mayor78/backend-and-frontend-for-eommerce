import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer'; // Import the CountdownTimer component
import '../style/Timer.css';
import '../style/button.css';


const Timer = () => {
  const targetDate = new Date('2024-12-31T23:59:59');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="timer-container">

<h1 class="flashsales btn-52">
  <div class="original">Flash Sales :</div>
  <div class="letters">
    {/* <!-- Place each letter in its own element --> */}
    <span>F</span>
    <span>L</span>
    <span>A</span>
    <span>S</span>
    <span>H</span>
    <span>S</span>
    <span>A</span>
    <span>L</span>
    <span>E</span>
    <span>S</span>
    
    <span>:</span>
  </div>
</h1>










      {/* <h1 className="flashsales btn-31"> <span class="text-container"><span className='text'> Flash Sales :</span></span></h1> */}
      <div className="timer">
        <div className="timer-item btn-31 ">
          <span class="text-container">D's</span>
          <span className='text'>{timeLeft.days}</span>
        </div>
        <div className="timer-item btn-31 ">
          <span class="text-container">Hrs</span>
          <span className='text'>{timeLeft.hours}</span>
        </div>
        <div className="timer-item btn-31">
          <span class="text-container">Mins</span>
          <span className='text'>{timeLeft.minutes}</span>
        </div>
        <div className="timer-item btn-31">
          <span class="text-container">Secs</span>
          <span className='text'>{timeLeft.seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;

import React, { useState,useEffect } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [runIt, setRunIt] = useState(false)
  useEffect(()=>{
    if(runIt){
    const myInterval = setInterval(() => {
      console.log('myInterval: ');
      console.log('seconds: ', seconds);
      console.log('minutes: ', minutes);
      console.log('isOn: ', isOn)
      if (seconds > 0) {
        console.log('if (seconds > 0) {')
        console.log('BEFORE setting anything')
        console.log('seconds: ', seconds);
        console.log('minutes: ', minutes);
        console.log('isOn: ', isOn)
        setSeconds(seconds - 1)
        console.log('AFTER setting everything')
        console.log('seconds: ', seconds);
        console.log('minutes: ', minutes);
        console.log('isOn: ', isOn)
        setRunIt(false);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          console.log('if (seconds === 0) { if (minutes === 0) {')
          console.log('NOTHING to set here just clearing the interval on seconds AND minutes = 0')
          clearInterval(myInterval);
          setRunIt(false);
        } else {
          console.log('else {');
          console.log('BEFORE setting anything')
          console.log('seconds: ', seconds);
          console.log('minutes: ', minutes);
          console.log('isOn: ', isOn)
          setSeconds(59);
          setMinutes(minutes - 1)
          console.log('AFTER setting everything')
          console.log('seconds: ', seconds);
          console.log('minutes: ', minutes);
          console.log('isOn: ', isOn)
          setRunIt(false);
        }
      }
    }, 1000);
  }
  },[runIt,seconds,minutes,isOn])

  const startTimer = () => {
    if (isOn === true) {
      return;
    }
    else {
      setRunIt(true);
      setIsOn(true);
    }
  }

  const stopTimer = () => {
    //FIX THISS!!
    //clearInterval(myInterval);
    setIsOn(false)
  }

  const resetTimer = () => {
    stopTimer();
    setMinutes(25);
    setSeconds(0);
  }

  return (
    <div className="timer-container">
      <div className="time-display">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="timer-button-container">
        <TimerButton
          className="start-timer"
          buttonAction={startTimer}
          buttonValue={'Start'}
        />
        <TimerButton
          className="stop-timer"
          buttonAction={stopTimer}
          buttonValue={'Stop'}
        />
        <TimerButton
          className="reset-timer"
          buttonAction={resetTimer}
          buttonValue={'Reset'}
        />
      </div>
    </div>
  );
}

export default Timer;
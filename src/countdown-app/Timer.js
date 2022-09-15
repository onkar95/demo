import React, { useEffect, useState } from 'react'
// import './App.css';

const Timer = () => {
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);
  let [minutes, setminutes] = useState(0);
  let [seconds, setseconds] = useState(0);

  let [start, setstart] = useState(false);
  let [pause, setpause] = useState(true);
  let [reset, setreset] = useState(false);



  let time;
  useEffect(() => {
    console.log("useeefect")
    console.log("p", pause)
    console.log("st", start)
    console.log("rt", reset)

    time = setInterval(() => {
      if (start === true && pause === false ) {
        if (seconds === 0 && minutes > 0) {
          setseconds(59);
          setminutes(minutes = minutes - 1)
        }
        if (seconds > 0) setseconds(seconds -= 1)
      }
    }, 1000);

     return () => clearInterval(time)

  }, [start, reset, pause,seconds]);

  const handelStart = () => {

    setminutes(min);
    setseconds(sec)
    setstart(true)
    setpause(false)
  }
  const handelPause = () => {
    setpause(!pause)
    setstart(!start)

  }
  const handelReset = () => {
    setminutes(0);
    setseconds(0);
    setstart(false)
    setpause(true)
    return () => clearInterval(time)
    // clearInterval(time)
  }

  return (
    <div>
      <label>minutes:</label>
      <input type='text' value={min} onChange={(e) => setmin(e.target.value)} />
      <label>seconds:</label>
      <input type='text' value={sec} onChange={(e) => setsec(e.target.value)} />
      <div>
        <h3>{minutes<9?"0"+minutes:minutes}:{seconds<9?"0"+seconds:seconds}</h3>
        <article>
          <button onClick={() => handelStart()}>start</button>
          <button onClick={() => handelPause()}>pause/resume</button>
          <button onClick={() => handelReset()}>reset</button>
        </article>
      </div>
    </div>
  )
}

export default Timer
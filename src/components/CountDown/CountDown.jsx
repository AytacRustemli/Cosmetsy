import React, { useEffect, useRef, useState } from 'react'
import '../CountDown/countDown.scss'

const CountDown = () => {
    const [timerDays,setTimerDays] = useState('00');
    const [timerHours,setTimerHours] = useState('00');
    const [timerMinutes,setTimerMinuters] = useState('00');
    const [timerSeconds,setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () =>{
        const countdownDate = new Date('February 14, 2023 00:00:00').getTime();
        interval = setInterval(() =>{
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(interval.current);
            }
            else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinuters(minutes);
                setTimerSeconds(seconds);
            }

        },1000);
    };

    useEffect(() =>{
        startTimer();
        return () =>{
            clearInterval(interval.current);
        }
    });

  return (
    <div>
        <section id='countdown'>
            <div className="timer-container">
                <div className="timer">
                    <p>Affordable shopping during the cool hours! <span>10% extra discount</span>  for your...</p>
                    <div className='dene'>
                        <section>
                            <p>{timerDays} <sup>d</sup></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours} <sup>h</sup></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerMinutes} <sup>m</sup></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerSeconds} <sup>s</sup></p>
                        </section>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CountDown
import { useEffect, useState } from 'react'
import { TimerStyled } from './Timer.styled';

export const Timer = () => {
    const [secondsLeft, setSecondsLeft] = useState(0);

    useEffect(() => {
        const targetDate = new Date('January 1, 2030 00:00:00');

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            const seconds = Math.floor(difference / 1000);
            setSecondsLeft(seconds);
        };

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    })
  return (
    <TimerStyled>
        Nedtælling til 2030: {secondsLeft} sekunder
    </TimerStyled>
  )
}

import { useEffect, useState } from 'react';
export default function Timer({timeout, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => {
       const timer = setTimeout(onTimeout, timeout);
       return () => clearTimeout(timer);
    }, [onTimeout, timeout]);
    useEffect(() => {
       const interval= setInterval(() => {
            setRemainingTime((prevTime)  => prevTime - 100);
        }, 100)
        return () => {
           clearInterval(interval);
        }
    }, []);
    return <progress value={remainingTime} max={timeout}></progress>
}
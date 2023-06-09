import React, { useState, useEffect } from 'react';
import '../Styles/Clock.scss';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <div className="clock">
            <span>{`${hours < 10 ? '0' + hours : hours}`}</span>:
            <span>{`${minutes < 10 ? '0' + minutes : minutes}`}</span>:
            <span>{`${seconds < 10 ? '0' + seconds : seconds}`}</span>
        </div>
    );
}

export default Clock;
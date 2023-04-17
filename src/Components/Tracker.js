import React, { useState, useEffect } from 'react';
import '../Styles/Tracker.scss';

const Tracker = () => {
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);

    useEffect(() => {
        function handleMouseMove(event) {
            setPositionX(event.clientX);
            setPositionY(event.clientY);
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="tracker">
            <span>X: {positionX}</span>,
            <span> Y: {positionY}</span>
        </div>
    );
}

export default Tracker;
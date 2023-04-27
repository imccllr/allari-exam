import React, { useState, useEffect } from 'react';
import RippleButton from './RippleButton';
import '../Styles/Main.scss';

const Main = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    async function fetchData() {
        setIsLoaded(false);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await response.json();
        setIsLoaded(true);
        setData(jsonData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="main">
            <h1 className="main-title">Project description</h1>
            <h2 className="main-intro">
                This is a coding challenge. Below you will find the description for each module:
            </h2>
            <h3 className="main-description">
                <ul>
                    <li><b>Header:</b> You will find the hour shown in the format HH:MM:SS.</li>
                    <li><b>Navigation bar:</b> That is the name of your new employee!</li>
                    <li><b>Left content:</b> A tacker shows the position of the cursor in the viewport.</li>
                    <li><b>Center content:</b> This very module displays the description of the project and the output of some fetch call to an API.</li>
                    <li><b>Right content:</b> This is a cute image slideshow!</li>
                    <li><b>Footer:</b> Copyright stuff from my new job.</li>
                </ul>
            </h3>
            <div className="main-data">
                <div className="main-data-title">Data from API:</div>
                {isLoaded === false ? "Please wait" : (
                    <ul>
                        {data.map((item) => (
                            <li key={item.id} >
                                <b>User name</b>: {item.username} |
                                <b>Full name</b>: {item.name} |
                                <b>Email</b>: {item.email}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <RippleButton handleClick={fetchData}/>
        </div>
    );
}

export default Main;
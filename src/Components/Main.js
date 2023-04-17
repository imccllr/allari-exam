import React, { useState, useEffect } from 'react';
import '../Styles/Main.scss';

const Main = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData = await response.json();
            setData(jsonData);
        }

        fetchData();
    }, []);

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
                {JSON.stringify(data)}
            </div>
        </div>
    );
}

export default Main;
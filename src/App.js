import React from 'react';
import SocketWrapper from './components/socketWrapper';
import ApiWrapper from './components/apiWrapper';

const SocketDisplay = ({data}) => {
    return (
        <div className="wrapper">
            {data
            ? <p>Source: {data.source}<br/>Updated: {data.date}</p>
            : <p>Loading...</p>}          
        </div>
    )
}

const ApiDisplay = ({data}) => {
    return (
        <div className="wrapper">
            <p>Id: {data.id}<br />Title: {data.title}</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <SocketWrapper event="FromAPI" url="http://127.0.0.1:4001">
                <SocketDisplay />
            </SocketWrapper>    
            <br />
            <ApiWrapper url="https://jsonplaceholder.typicode.com/todos/1">
                <ApiDisplay />
            </ApiWrapper>
        </div>
    )
}

export default App;

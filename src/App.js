import React from 'react';
import SocketWrapper from './components/socketWrapper';
import ApiWrapper from './components/apiWrapper';
import CombinationWrapper from './components/CombinationWrapper';

const DataDisplay = ({data, title}) => {
    return (
        <div className="wrapper">
            <p>{title}</p>
            {data
            ? <p>Source: {data.source}<br/>Updated: {data.date}</p>
            : <p>Loading...</p>}          
        </div>
    )
}

const App = () => {
    return (
        <div>
            <SocketWrapper event="Message1" url="http://localhost:4001">
                <DataDisplay title="Calling Web Socket..." />
            </SocketWrapper>    
            <br />
            <ApiWrapper url="http://localhost:4001/api/message">
                <DataDisplay title="Calling API..." />
            </ApiWrapper>
            <br />
            <CombinationWrapper event="Message2" wsUrl="http://localhost:4001" apiUrl="http://localhost:4001/api/message">
                <DataDisplay title="Calling Both..." />
            </CombinationWrapper>
        </div>
    )
}

export default App;

import React, { cloneElement, useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import axios from 'axios';

export default ({event, wsUrl, apiUrl, children}) => {

    const [ response, setResponse ] = useState(false);

    useEffect( () => {
        axios.get(apiUrl).then(r => setResponse(r.data));
        const socket = socketIOClient(wsUrl);
        socket.on(event, data => setResponse(data));
    }, [apiUrl, wsUrl, event]);

    return (
        <div>
            {[].concat(children).map((child, index) => cloneElement(child, { "data": response, "key": index}))}
        </div>
    )
}

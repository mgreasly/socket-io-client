import React, { cloneElement, useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

export default ({event, url, children}) => {

    const [ response, setResponse ] = useState(false);

    useEffect( () => {
        const socket = socketIOClient(url);
        socket.on(event, data => setResponse(data));
    }, [url, event]);

    return (
        <div>
            {[].concat(children).map((child, index) => cloneElement(child, { "data": response, "key": index}))}
        </div>
    )
}

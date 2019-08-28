import React, { cloneElement, useState, useEffect } from 'react';
import axios from 'axios';

export default ({url, children}) => {
    const [ response, setResponse ] = useState(false);

    useEffect( () => { axios.get(url).then(r => setResponse(r.data)); }, [url]);
    
    return (
        <div>
            {[].concat(children).map((child, index) => cloneElement(child, { "data": response, "key": index}))}
        </div>
    )
}

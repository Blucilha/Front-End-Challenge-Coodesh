import React, { useEffect, useState } from 'react';
import fetchApiRandom from '../FetchApi/FetchApi';
import contextApi from './ContextApi';

function ProviderApi({ children }) {
    const [apiRandom, setApiRandom] = useState([]);

    const handleApiRandom = async () => {
        const result = await fetchApiRandom();
        console.log(result)
        setApiRandom(result);
    }

    useEffect(() => {
        handleApiRandom();
    }, []);

    const provider = {
        clientRandom: apiRandom,
    }

    return (
        <contextApi.Provider value={ provider }>
            { children }
        </contextApi.Provider>
    );
}

export default ProviderApi;

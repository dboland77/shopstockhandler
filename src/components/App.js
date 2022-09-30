import React from 'react';
import {useAxios} from "../hooks"
import {baseURL} from "../constants"


export const App = () => {

    const { response, loading, error } = useAxios({
        method: "GET",
        url: `/fca7ef93-8d86-4574-9a4a-3900d91a283e`,
        headers: {
            accept: '*/*'
        },
        baseURL
    });

    

    return (
        <div className="App">
            {loading && (
                <p>Loading...</p>
            )}
            {error && (
                <p>{error.message}</p>
            )}
            {!loading && !error && (
                response.data[0].description
            )}
        </div>
    );
}


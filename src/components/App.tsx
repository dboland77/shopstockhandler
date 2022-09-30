import React, {useEffect, useState} from 'react';
import {useAxios} from "../hooks"
import {baseURL} from "../constants"
import {IProductInterface} from "../interfaces/productInterface"


export const App = () => {
    const [productData, setProductData] = useState<IProductInterface[] | []>([])

    const { response, loading, error } = useAxios({
        method: "GET",
        url: `/fca7ef93-8d86-4574-9a4a-3900d91a283e`,
        headers: {
            accept: '*/*'
        },
        baseURL
    });

    useEffect( ()=>
       setProductData(response?.data)
    ,[])
    

    return (
        <div className="App">
            {loading && (
                <p>Loading...</p>
            )}
            {error && (
                <p>{error.message}</p>
            )}
            {!loading && !error && (
            productData.length > 0 ? "a" : "hello"
            )}
        </div>
    );
}


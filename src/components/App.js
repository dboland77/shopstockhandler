import React, { useEffect, useState } from 'react';
import {useAxios} from "../hooks"
import {baseURL} from "../constants"
import {Card, CardContainer} from "./ProductCard"


export const App = () => {
    const [productData,setProductData] = useState([]);

    const { response, loading, error } = useAxios({
        method: "GET",
        url: `/fca7ef93-8d86-4574-9a4a-3900d91a283e`,
        headers: {
            accept: '*/*'
        },
        baseURL
    });

    useEffect( ()=>{
        if(!loading && !error){
            setProductData(response.data)
        }
    },[loading])
    

    return (
        <div className="App">
            {loading && (
                <p>Loading...</p>
            )}
            {error && (
                <p>{error.message}</p>
            )}
            {!loading && !error && productData.length > 0 && (
                <CardContainer>

               {productData.map((product) =><Card key={product.productId} product={product}/>)}
                </CardContainer>
            )}
        </div>
    );
}


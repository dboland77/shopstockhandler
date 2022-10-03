import React, { useEffect, useState } from 'react';
import {useAxios} from "../hooks"
import {baseURL} from "../constants"
import {Card, CardContainer} from "./ProductCard"
import {DeleteButton} from "../components/DeleteButton/DeleteButton"


export const App = () => {
    const [productData,setProductData] = useState([]);
    const [removeProducts, setRemoveProducts] = useState(()=> new Set([]))

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

    const handleDelete = () => {
        setProductData(prev=> prev.filter(p => !removeProducts.has(p.productId)))
    }

    const handleSelect = (e, prodId) => {
        e.target.checked?
            setRemoveProducts(prev=> new Set(prev).add(prodId))
       : setRemoveProducts(prev => prev.has(prodId)? prev.delete(prodId) : prev)
    }
    

    return (
        <div className="App">
            {loading && (
                <p>Loading...</p>
            )}
            {error && (
                <p>{error.message}</p>
            )}
            {!loading && !error && productData.length > 0 && (
                <>
                <DeleteButton 
                handleClick = {handleDelete} 
                numberSelected={removeProducts.size}/>
                <CardContainer>

               {productData.map((product) =>
               <Card 
               key={product.productId} 
               product={product}
               handleSelect={e=> handleSelect(e, product.productId)}/>)}
                </CardContainer>
                </>
            )}
        </div>
    );
}


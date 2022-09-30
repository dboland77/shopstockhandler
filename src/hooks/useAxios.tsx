import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';


export const useAxios = (axiosParams: AxiosRequestConfig) => {
  axios.defaults.baseURL = axiosParams.baseURL;
  
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(axiosParams.method === "GET" || axiosParams.method === "get");

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch( err ) {
      if (err instanceof AxiosError){
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  }

  useEffect(() => {
    if(axiosParams.method === "GET"){
      fetchData(axiosParams);
    }
  },[]);

  return { response, error, loading, sendData };
}



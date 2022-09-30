import React, {useState} from 'react';
import {useAxios} from "../hooks"

const baseURL = 'https://jsonplaceholder.typicode.com';

export const App = () => {

  const [postId, setPostId] = useState(1);
  const { response, loading, error, sendData } = useAxios({
    method: "GET",
    url: `/posts/${postId}`,
    headers: {
      accept: '*/*'
    },
    baseURL
  });

  const getNextPost = () => {
    setPostId(postId + 1);
    sendData();
  }

  return (
    <div className="App">
      <h1 className="page-title">Posts</h1>
      {loading && (
        <p>Loading...</p>
      )}
      {error && (
        <p>{error.message}</p>
      )}
      {!loading && !error && (
        <article className="post">
          <h3 className="post-title">{response?.data.title}</h3>
          <p className="post-body">
            {response?.data.body}
          </p>
        </article>
      )}
      <button onClick={() => getNextPost()}>
        Next Article Please!
      </button>
    </div>
  );
}


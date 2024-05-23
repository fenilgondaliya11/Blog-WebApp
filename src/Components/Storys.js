import React from "react";
import { useGlobalContext } from "../Context/AuthContext";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1 className="loding text-center">Loading.....</h1>
      </>
    );
  }

  return (
    <>
      <div className="stories-container">
        {hits.map((curPost) => {
          const { title, author, objectID, url, num_comments } = curPost;

          if (!title || !author || !objectID || !url) {
            return null;
          }

          return (
            <div className="story-card" key={objectID}>
              <h2>{title}</h2>
              <p className="text-dark">
                By <span>{author}</span> | <span>{num_comments} comments</span>
              </p>
              <div className="card-buttons">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
                <button onClick={() => removePost(objectID)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;

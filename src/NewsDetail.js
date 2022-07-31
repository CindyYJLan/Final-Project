import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NewsDetail() {
  const [selectedNews, setSelectedNews] = useState();

  let params = useParams();
  useEffect(() => {
    if (params.newsId) {
      const newsId = params.newsId;
      const newsUrl = `https://api.spaceflightnewsapi.net/v3/articles/${newsId}?`;
      fetch(newsUrl)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setSelectedNews(result);
        });
    }
  }, [params.newsId]);

  return (
    <div>
      <figure>
        <img src={selectedNews?.imageUrl} alt={selectedNews?.title} />
      </figure>
      <h3>{selectedNews?.title}</h3>
      <h5>author: {selectedNews?.author}</h5>
      <h6>publishedAt: {selectedNews?.publishedAt}</h6>
      <h5>
        Summary: {selectedNews?.summary}{" "}
        <a href={selectedNews?.url} target="_">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Read Full Story
          </span>
        </a>
      </h5>
    </div>
  );
}

export default NewsDetail;

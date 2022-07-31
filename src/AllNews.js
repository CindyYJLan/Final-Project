import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function AllNews() {
  const [allNews, setAllNews] = useState([]);
  const [currentDisplayNews, setCurrentDisplayNews] = useState([]);
  const [dislikeArticle, setDislikeArticle] = useState([]);
  const [favNews, setFavNews] = useState([]);

  useEffect(() => {
    const newsURL = `https://api.spaceflightnewsapi.net/v3/articles?_limit=20`;

    fetch(newsURL)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setAllNews(result);
        setCurrentDisplayNews(result);
      });
  }, []);

  const dislikeArticleHandler = (event) => {
    const selectedNews = event.currentTarget.value;
    setDislikeArticle([...dislikeArticle, selectedNews]);
  };

  return (
    <div className="flex flex-wrap ml-96 mr-96 pl-24">
      {currentDisplayNews.map((x) => {
        if (!dislikeArticle.includes(x.id.toString())) {
          return (
            <NewsItem
              key={x.id}
              id={x.id}
              title={x.title}
              imageUrl={x.imageUrl}
              newsSite={x.newsSite}
              publishedAt={x.publishedAt}
              summary={x.summary}
              dislikeArticleHandler={dislikeArticleHandler}
            />
          );
        }
      })}
    </div>
  );
}

export default AllNews;

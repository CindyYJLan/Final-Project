import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Blog from "./Blog";

function AllNews() {
  const [allNews, setAllNews] = useState([]);
  const [currentDisplayNews, setCurrentDisplayNews] = useState([]);
  const [dislikeArticle, setDislikeArticle] = useState(
    JSON.parse(localStorage.getItem("dislikeArticles")) || []
  );

  useEffect(() => {
    localStorage.setItem("dislikeArticles", JSON.stringify(dislikeArticle));
  }, [dislikeArticle]);

  useEffect(() => {
    const newsURL = `https://api.spaceflightnewsapi.net/v3/articles?_limit=50`;

    fetch(newsURL)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setAllNews(result);
        setCurrentDisplayNews(result);
      });
  }, []);

  const dislikeArticleHandler = (event) => {
    const selectedNews = event.currentTarget.value * 1;
    setDislikeArticle([...dislikeArticle, selectedNews]);
  };

  const searchHandler = (event) => {
    const inputWord = event.target.value;
    if (inputWord !== "") {
      const searchFilter = currentDisplayNews.filter(
        (x) =>
          x.title.includes(inputWord) ||
          x.newsSite.includes(inputWord) ||
          x.publishedAt.includes(inputWord)
      );
      setCurrentDisplayNews(searchFilter);
    } else {
      setCurrentDisplayNews(allNews);
    }
  };
  return (
    <div className="grid grid-cols-5 gap-3" role="grid">
      <div className="col-span-4">
        {" "}
        <div className="flex flex-wrap ml-20">
          <div className="relative">
            <input
              onChange={searchHandler}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="🛸search me!"
              required
            />
          </div>

          {currentDisplayNews.map((x) => {
            if (!dislikeArticle || !dislikeArticle.includes(x.id)) {
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
      </div>
      <div>
        <Blog />
      </div>
    </div>
  );
}

export default AllNews;

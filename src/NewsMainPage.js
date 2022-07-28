import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Navigation from "./Navigation";
import NewsDetail from "./NewsDetail";
import { useParams } from "react-router-dom";

function NewsMainPage() {
  const [allNews, setAllNews] = useState([]);
  const [currentDisplayNews, setCurrentDisplayNews] = useState(allNews);
  //显示detail
  const [selectedNews, setSelectedNews] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const [dislikeArticle, setDislikeArticle] = useState([]);
  const [favNews, setFavNews] = useState([]);
  const [comments, setComments] = useState("");
  const [inputComments, setInputComments] = useState("");
  const [commentsDisplay, setCommentsDisplay] = useState("");
  const [newComments, setNewComments] = useState("");

  let params = useParams();

  useEffect(() => {
    if (params.newsId) {
      const newsId = params.newsId;
      const newsUrl = `https://api.spaceflightnewsapi.net/v3/articles/${newsId}?`;
      fetch(newsUrl)
        .then((response) => response.json())
        .then((result) => setSelectedNews(result));
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  }, [params.newsId]);

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

  const inputSearchHandler = (event) => {
    const inputKeyword = event.target.value;
    if (inputKeyword) {
      const filterSearchResult = currentDisplayNews.filter(
        (news) =>
          news.title?.includes(inputKeyword) ||
          news.newsSite?.includes(inputKeyword) ||
          news.summary?.includes(inputKeyword)
      );
      setCurrentDisplayNews(filterSearchResult);
    } else {
      setCurrentDisplayNews(allNews);
    }
  };

  const dislikeArticleHandler = (event) => {
    const selectedNews = event.currentTarget.value;
    setDislikeArticle([...dislikeArticle, selectedNews]);
  };

  const favHandler = (event) => {
    setCurrentDisplayNews(favNews);
  };

  const saveToFavouriteHandler = (event) => {
    const selectedNews = event.currentTarget.value * 1;
    const newFavNews = currentDisplayNews.filter(
      (news) => news.id === selectedNews
    );
    setFavNews([...favNews, ...newFavNews]);
    console.log(newFavNews);
  };

  const deleteSavedNewsHandler = (event) => {
    const selectedNews = event.currentTarget.value;
    const newFavNews = favNews.filter((news) => news.id !== selectedNews);
    setFavNews(newFavNews);
    setCurrentDisplayNews(newFavNews);
  };

  const inputCommentsHandler = (event) => {
    setInputComments(event.currentTarget.value);
  };

  const submitCommentsHandler = (event) => {
    setCommentsDisplay([...comments], [...commentsDisplay], newComments);
  };

  if (!showDetail) {
    return (
      <div>
        <h1>Spaceflight News</h1>

        <Navigation />
        <input
          onChange={inputSearchHandler}
          type="text"
          placeholder="What do you want to know?"
        />
        <label>🔎Search</label>

        {currentDisplayNews.map((x) => {
          if (!dislikeArticle.includes(x.id.toString())) {
            return (
              <NewsItem
                key={x.id}
                id={x.id}
                title={x.title}
                imageUrl={x.imageUrl}
                url={x.url}
                newsSite={x.newsSite}
                publishedAt={x.publishedAt}
                summary={x.summary}
                dislikeArticleHandler={dislikeArticleHandler}
                saveToFavouriteHandler={saveToFavouriteHandler}
                deleteSavedNewsHandler={deleteSavedNewsHandler}
              />
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={favHandler} className="film-list-filter">
          Favourite
          <span className="section-count">
            {" "}
            {""}
            {favNews.length}
          </span>
        </button>{" "}
        <NewsDetail
          news={selectedNews}
          isFavourite={
            favNews.some((news) => news === selectedNews.id)
              ? "remove_from_queue"
              : "add_to_queue"
          }
          saveToFavouriteHandler={saveToFavouriteHandler}
          deleteSavedNewsHandler={deleteSavedNewsHandler}
          inputCommentsHandler={inputCommentsHandler}
          submitCommentsHadler={submitCommentsHandler}
        />{" "}
      </div>
    );
  }
}

export default NewsMainPage;

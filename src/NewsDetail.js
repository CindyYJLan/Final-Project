import React from "react";

function NewsDetail(props) {
  let commentContent = [];
  if (props.comments[props.news?.id]) {
    commentContent = props.comments[props.news?.id].map((comment) => (
      <div>
        <p>{comment}</p>
      </div>
    ));
  }
  console.log(props.news?.id);
  console.log(props.comments);

  return (
    <div>
      <figure>
        <img src={props.news?.imageUrl} alt={props.news?.title} />
      </figure>
      <h3>{props.news?.title}</h3>
      <h5>author: {props.news?.author}</h5>
      <h6>publishedAt: {props.news?.publishedAt}</h6>
      saveToFavouriteHandler
      <button
        onClick={
          props.isFavourite === "add_to_queue"
            ? props.saveToFavouriteHandler
            : props.deleteSavedNewsHandler
        }
        value={props.news?.id}
      >
        ⭐Save to Favourite
      </button>
      <input
        onChange={props.inputCommentsHandler}
        type="text"
        placeholder="put your comments here !"
      />
      <button onClick={() => props.submitCommentsHandler(props.news?.id)}>
        💬Submit your comments
      </button>
      {commentContent}
    </div>
  );
}

export default NewsDetail;

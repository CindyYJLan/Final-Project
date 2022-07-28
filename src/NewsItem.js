import { Link } from "react-router-dom";
import "./NewsItem.css";

function NewsItem(props) {
  return (
    <div>
      <figure>
        <img className="imgLayout" src={props.imageUrl} alt={props.title} />
      </figure>
      <div>
        <h3>{props.title}</h3>
        <h5>newsSite: {props.newsSite}</h5>
        <h6>publishedAt: {props.publishedAt}</h6>
      </div>

      <Link to={`/news/${props.id}`}>
        <span className="material-icons">read_more</span>
      </Link>

      <button onClick={props.dislikeArticleHandler} value={props.id}>
        ☹️Dislike the article
      </button>
    </div>
  );
}

export default NewsItem;

import "./BlogItem.css";

function BlogItem(props) {
  return (
    <div className="blogItem">
      <h3>{props.title}</h3>
      <figure>
        <img className="imgLayout" src={props.imageUrl} alt={props.title} />
      </figure>

      <h5>newsSite: {props.newsSite}</h5>
      <h6>publishedAt: {props.publishedAt}</h6>
      <h6>updatedAt: {props.updatedAt}</h6>
      <p>summary: {props.summary}</p>
    </div>
  );
}

export default BlogItem;

function Favourite(props) {
  return (
    <div>
      <button onClick={props.favHandler} className="film-list-filter">
        Favourite
        <span className="section-count">
          {" "}
          {""}
          {props.favNews.length}
        </span>
      </button>{" "}
    </div>
  );
}

export default Favourite;

function NewsItem(props) {
  return (
    <div>
      <div className="p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-auto">
          <img className="w-full" src={props.imageUrl} alt={props.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">
              newsSite: {props.newsSite}
            </p>
            <p className="text-gray-700 text-base">
              publishedAt: {props.publishedAt}
            </p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <a
              href={`/news/${props.id}`}
              className="no-underline hover:underline ..."
            >
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Read More
              </span>
            </a>
            <button
              onClick={props.dislikeArticleHandler}
              value={props.id}
              className="no-underline hover:underline ..."
            >
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Dislike
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;

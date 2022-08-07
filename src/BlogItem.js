function BlogItem(props) {
  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-auto">
        <img className="w-full" src={props.imageUrl} alt={props.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">NewsSite: {props.newsSite}</p>
          <p className="text-gray-700 text-base">
            Published At: {props.publishedAt}
          </p>
          <p className="text-gray-700 text-base">Summary:{props.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;

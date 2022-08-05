import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AllNews from "./AllNews";
import Blog from "./Blog";
import NewsDetail from "./NewsDetail";

function App() {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto text-2xl py-12 ml-24">
          <a
            href="/news"
            className="block py-2 pr-4  text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white md:dark:hover:bg-transparent w-auto"
          >
            Space Flight News
          </a>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllNews />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/news" element={<AllNews />}></Route>
          <Route path="/news/:newsId" element={<NewsDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <div className="m-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;

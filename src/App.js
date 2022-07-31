import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AllNews from "./AllNews";
import Blog from "./Blog";
//import "./App.css";
import NewsDetail from "./NewsDetail";

function App() {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Space Flight News
          </span>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
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

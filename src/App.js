import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import AllNews from "./AllNews";
import Blog from "./Blog";
import "./App.css";
import NewsDetail from "./NewsDetail";

function App() {
  return (
    <div>
      <h1>Spaceflight News</h1>
      <BrowserRouter>
        <nav>
          <NavLink to="/news">
            <span className="headings">News</span> |
          </NavLink>
          <NavLink to="blog">
            <span className="headings"> {""}Blog</span>
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<AllNews />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/news" element={<AllNews />}></Route>
          <Route path="/news/:newsId" element={<NewsDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

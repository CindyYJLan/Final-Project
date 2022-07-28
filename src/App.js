import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NewsMainPage from "./NewsMainPage";
import "./App.css";
import NewsDetail from "./NewsDetail";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">HomePage |</NavLink>
        {""}
        <NavLink to="/news">NewsPage</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/news" element={<NewsMainPage />}>
          <Route path=":newsId" element={<NewsDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

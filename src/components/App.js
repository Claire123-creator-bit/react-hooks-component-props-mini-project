

import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="app-container">
      <Header />
      <About />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

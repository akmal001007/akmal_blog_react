import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home"
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./NotFound";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

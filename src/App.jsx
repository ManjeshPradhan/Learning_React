import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Blog from "./pages/Blog";
import Single from "./pages/Single";
import LearningUseState from "./pages/LearningUseState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<h1>This is index</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/learning-use-state" element={<LearningUseState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

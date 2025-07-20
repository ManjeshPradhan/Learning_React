import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    const response = await axios.get(
      "https://687af35eabb83744b7ee46ed.mockapi.io/blogs"
    );
    console.log(response);
    if (response.status === 200) {
      setBlogs(response.data);
    } else {
      alert("Error");
    }
  }

  useEffect(function () {
    fetchBlogs();
  }, []);
  console.log(blogs);

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {blogs.map(function (blog) {
          return <Card key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
}

export default Home;

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Single() {
  const data = useParams();
  const [blogs, setBlogs] = useState({});
  const navigate = useNavigate();

  async function fetchBlogs() {
    const response = await axios.get(
      "https://687af35eabb83744b7ee46ed.mockapi.io/blogs/" + data.id
    );
    if (response.status === 200) {
      setBlogs(response.data);
    } else {
      alert("Error");
    }
  }

  async function deleteBlog() {
    const response = await axios.delete(
      "https://687af35eabb83744b7ee46ed.mockapi.io/blogs/" + data.id
    );
    if (response.status === 200) {
      alert("Blog deleted successfully");
      navigate("/home");
    } else {
      alert("Error deleting blog");
    }
  }

  function editpage() {
    navigate(`/edit/${data.id}`);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Reasonable spacing with margin top and bottom */}
      <div className="flex justify-center mt-10 mb-6 px-4">
        <div className="bg-white dark:bg-black border tweet-border max-w-xl w-full rounded-lg overflow-hidden shadow-sm">
          <article className="p-4 flex space-x-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                src={blogs.image}
                alt="User Avatar"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Header */}
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-baseline space-x-1 text-sm min-w-0">
                  <span className="font-bold text-gray-900 dark:text-gray-100 truncate hover:underline cursor-pointer">
                    {blogs.title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 truncate">
                    @{blogs.title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">·</span>
                  <span className="text-gray-500 dark:text-gray-400 hover:underline cursor-pointer whitespace-nowrap">
                    3h
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base leading-normal mb-2">
                {blogs.description}{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  #webdev
                </a>{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  #tailwindcss
                </a>{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  @tailwindcss
                </a>
              </p>

              {/* Media */}
              <div className="mt-3 rounded-xl border tweet-border overflow-hidden">
                <img
                  src={blogs.image}
                  alt="Tweet media content"
                  className="w-full object-cover aspect-video"
                />
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Spaced and centered buttons */}
      <div className="flex justify-center space-x-4 mt-4 mb-10">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={editpage}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={deleteBlog}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Single;

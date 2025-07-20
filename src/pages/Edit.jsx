import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(
          "https://687af35eabb83744b7ee46ed.mockapi.io/blogs/" + id
        );
        if (response.status === 200) {
          setBlogs(response.data);
        } else {
          alert("Error fetching blog");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Error fetching blog");
      }
    }

    fetchBlogs();
  }, [id]);

  return (
    <div>
      <Navbar />

      {/* Main Blog Card */}
      <div className="flex justify-center mt-10 mb-6 px-4">
        <div className="bg-white dark:bg-black border tweet-border max-w-xl w-full rounded-lg overflow-hidden shadow-sm">
          <article className="p-4 flex space-x-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={blogs.image}
                alt="User Avatar"
              />
            </div>

            {/* Blog Content */}
            <div className="flex-1 min-w-0">
              {/* Blog Header */}
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-baseline space-x-1 text-sm min-w-0">
                  <span className="font-bold text-gray-900 dark:text-gray-100 truncate">
                    {blogs.title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 truncate">
                    @{blogs.title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">·</span>
                  <span className="text-gray-500 dark:text-gray-400">3h</span>
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

              {/* Blog Image */}
              <div className="mt-3 rounded-xl border tweet-border overflow-hidden">
                <img
                  src={blogs.image}
                  alt="Blog Media"
                  className="w-full object-cover aspect-video"
                />
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center space-x-4 mt-4 mb-10">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => alert("This button does not do anything yet.")}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Edit;

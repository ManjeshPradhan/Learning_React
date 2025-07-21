import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  async function editBlog(e) {
    e.preventDefault();
    const response = await axios.put(
      "https://687af35eabb83744b7ee46ed.mockapi.io/blogs/" + id,
      {
        title,
        subtitle: subTitle,
        description,
        image,
      }
    );
    if (response.status === 200) {
      navigate("/home");
    }
  }

  useEffect(() => {
    async function fetchBlogs() {
      const response = await axios.get(
        "https://687af35eabb83744b7ee46ed.mockapi.io/blogs/" + id
      );
      if (response.status === 200) {
        setBlogs(response.data);
        setTitle(response.data.title);
        setSubTitle(response.data.subtitle);
        setDescription(response.data.description);
        setImage(response.data.image);
      }
    }

    fetchBlogs();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-black mb-6">Edit Event</h1>

        <form onSubmit={editBlog} className="grid grid-cols-1 gap-6">
          {/* Title */}
          <div className="p-2">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              placeholder="Title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Sub Title */}
          <div className="p-2">
            <input
              type="text"
              id="subTitle"
              name="subTitle"
              value={subTitle}
              placeholder="Sub Title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="p-2">
            <textarea
              id="description"
              name="description"
              rows={4}
              value={description}
              placeholder="Event Description"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Image URL */}
          <div className="p-2">
            <textarea
              id="image"
              name="image"
              rows={2}
              value={image}
              placeholder="Image URL"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          {/* Submit Button inside form */}
          <div className="flex justify-center mt-4 mb-10">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;

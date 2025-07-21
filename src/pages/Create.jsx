import { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

function Create() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function setDataToBackend(e) {
    e.preventDefault(); // Prevent page reload on form submit

    const response = await axios.post(
      "https://687af35eabb83744b7ee46ed.mockapi.io/blogs",
      {
        title,
        subTitle,
        description,
        image,
      }
    );
    console.log("Response from backend:", response.data);
    alert("Blog created successfully!");
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-black mb-6">Create Blog</h1>

        <form onSubmit={setDataToBackend} className="grid grid-cols-1 gap-6">
          <div className="p-2">
            <input
              type="text"
              placeholder="Title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="p-2">
            <input
              type="text"
              placeholder="Sub Title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>

          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <textarea
                placeholder="Description"
                rows={3}
                className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: "#f6f6f6" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <textarea
                placeholder="Image URL"
                rows={3}
                className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: "#f6f6f6" }}
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-full mt-6 p-2">
            <button
              type="submit"
              className="block w-full bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full"
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;

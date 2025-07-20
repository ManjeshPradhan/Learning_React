import { Link } from "react-router-dom";

function Card({ blog }) {
  console.log(blog);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to={"/single/" + blog.id}>
        <img
          className="p-8 rounded-t-lg"
          src={blog.image}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to="/single">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {blog.title}
          </h5>
        </Link>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-1xl  text-gray-900 dark:text-white">
            {blog.subtitle}
          </span>
          <button className="button">
            <span className="gradient-container">
              <span className="gradient" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

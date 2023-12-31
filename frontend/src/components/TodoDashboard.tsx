import { Link } from "react-router-dom";

const TodoDashboard = () => {
  return (
    <div className="m-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-5 font-bold">Your Tasks</h1>
        <Link to="/todos/new">
          <button className="bg-indigo-600 shadow-md w-24 h-10 py-0.5 text-md rounded-md text-white">
            New Task
          </button>
        </Link>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default TodoDashboard;

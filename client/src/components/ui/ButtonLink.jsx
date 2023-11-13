import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="binline-block content-center concursor-pointer rounded-md bg-indigo-500 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
    {children}
  </Link>
);

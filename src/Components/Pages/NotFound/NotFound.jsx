import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default NotFound;

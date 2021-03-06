import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Freaky's Blogs</h1>

      <div className="links">
        <a href="https://github.com/LakshitXD">My GitHub</a>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;

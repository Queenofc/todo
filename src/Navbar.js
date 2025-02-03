import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Blog Life</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
            color:"white",
            backgroundColor:'#f1356d',
            borderRadius:'30px',
            padding:'10px'
        }}>New Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;

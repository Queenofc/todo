import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Blog Life</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
            color:"white",
            backgroundColor:'#f1356d',
            borderRadius:'30px',
            padding:'10px'
        }}>Add Blog</a>
      </div>
    </div>
  );
};

export default Navbar;

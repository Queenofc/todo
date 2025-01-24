import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>To Do List</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
            color:"white",
            backgroundColor:'#f1356d',
            borderRadius:'25px',
            padding:'10px'
        }}>Add task</a>
      </div>
    </div>
  );
};

export default Navbar;

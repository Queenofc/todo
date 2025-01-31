import { useEffect, useState } from "react";
import "./index.css";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //this run at every render, the array makes it render at times only after thr first render
  //the array value is called a dependency and value is a usestate variable

  useEffect(() => {
    console.log('use effect ran');
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />{" "}
      {/*This is a prop*/}
    </div>
  );
};

export default Home;

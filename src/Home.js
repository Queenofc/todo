import "./index.css";

const handleClick = () =>{
    console.log("hi")
}
const  Home= () => {
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
      );
}
 
export default Home;
import { useState } from "react";
import "./index.css";

const  Home= () => {
    const [days,setDays]= useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    return (
        <div className="home">
            <h2>Homepage</h2>
        </div>
      );
}
 
export default Home;
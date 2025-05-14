import './Format.css';
import { useState } from "react";

const Home = () => {
    let clickCount = localStorage.getItem("clickCount");
    if (clickCount == null) {
        clickCount = 0;
    }

    const [clicks, setClicks] = useState(clickCount)

    const Click = () => {
        clickCount++;
        localStorage.setItem("clickCount", clickCount);
        setClicks(clickCount);
    }

    return (
        <>
            <h1>Home</h1>
            <button onClick={Click}>Click</button>
            <p>Click Count: {"" + clicks}</p>
        </>
    );
};

export default Home;
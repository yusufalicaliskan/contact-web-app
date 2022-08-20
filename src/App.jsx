/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import "./styles/app.css";
import { useDispatch } from "react-redux";
import { getContacts } from "./state/contacts";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile";
import { AiFillApple } from "react-icons/ai";

function App() {
    const dispatch = useDispatch()
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 5000);
    }, []);


    React.useEffect(() => {
        dispatch(getContacts())
    }, [])

    return (
        <div className="wrapper">
            <div className="content">
                {loader ? (
                    <div className="progress-container">
                        <span className="apple">
                            <AiFillApple fill="#ffffff" size={45} />
                        </span>
                        <div className="progress" />
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                )}
            </div>
        </div>
    );
}

export default App;

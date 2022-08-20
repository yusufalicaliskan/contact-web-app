/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import "./styles/app.css";
import {useDispatch} from "react-redux";
import {getContacts} from "./state/contacts";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getContacts())
    }, [])

  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </>
  );
}

export default App;

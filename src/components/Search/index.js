import React from "react";
import Style from "./style.module.css"
import {toast} from "react-toastify";

const Search = () => {
    const [keyword, setKeyword] = React.useState("");

    const searchHandler = () => {
        if(keyword.length === 0) {
            toast.error("Please enter the name");
        }
    }

    return (
        <div className={Style.search}>
            <div className={Style.inputColumn}>
                <input type="text" className={Style.input} placeholder={"Search a contact"} value={keyword} onChange={event => setKeyword(event.currentTarget.value)} />
            </div>
            <div className={Style.buttonColumn}>
                <button className={Style.button} onClick={searchHandler}>Search</button>
            </div>
        </div>
    )
}

export default Search
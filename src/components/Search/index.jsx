import React from "react";
import Style from "./style.module.css"
import {search} from "../../state/search";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {
    const [keyword, setKeyword] = React.useState("");
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.value);

    const searchHandler = () => {
        dispatch(search({
            value: {
                contacts,
                keyword
            }
        }))
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
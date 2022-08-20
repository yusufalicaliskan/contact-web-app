import React from "react";
import Style from "./style.module.css"
import {search} from "../../state/search";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.value);

    const searchHandler = (event) => {
        dispatch(search({
            value: {
                contacts,
                keyword: event.currentTarget.value
            }
        }))
    }

    return (
        <div className={Style.search}>
            <input type="text" className={Style.input} placeholder={"Search a contact"} onChange={searchHandler} />
        </div>
    )
}

export default Search
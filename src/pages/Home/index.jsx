import React from "react"
import Style from "./style.module.css"
import Contacts from "../../components/Contacts";
import Search from "../../components/Search";
import CreateContact from "../../components/CreateContact";
import {useSelector} from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
    const [modal, setModal] = React.useState(false);
    const contacts = useSelector(state => state.contacts.value);

    return (
        <>
            <button className={Style.createButton} onClick={() => setModal(true)}>
                <AiOutlinePlus />
            </button>
            <Search />
            {contacts.length > 0 && <Contacts />}
            <CreateContact isOpen={modal} onClose={() => setModal(false)} />
        </>
    )
}

export default Home
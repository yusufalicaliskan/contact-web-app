import React from "react"
import Style from "./style.module.css"
import Contacts from "../../components/Contacts";
import Search from "../../components/Search";
import CreateContact from "../../components/CreateContact";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
    const [modal, setModal] = React.useState(false);

    return (
        <>
            <button className={Style.createButton} onClick={() => setModal(true)}>
                <AiOutlinePlus />
            </button>
            <Search />
            <Contacts />
            <CreateContact isOpen={modal} onClose={() => setModal(false)} />
        </>
    )
}

export default Home
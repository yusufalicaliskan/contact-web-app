import React from "react"
import Style from "./style.module.css"
import Contacts from "../../components/Contacts";
import Search from "../../components/Search";
import CreateContact from "../../components/CreateContact";

const Home = () => {
    const [modal, setModal] = React.useState(false);

    return (
        <div className={Style.wrapper}>
            <div className={Style.content}>
                <button className={Style.createButton} onClick={() => setModal(true)}>Create Contact</button>
                <Search />
                <Contacts />
                <CreateContact isOpen={modal} onClose={() => setModal(false)} />
            </div>
        </div>
    )
}

export default Home
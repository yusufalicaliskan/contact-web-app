import React from "react"
import Style from "./style.module.css"
import Contacts from "../../components/Contacts";
import Search from "../../components/Search";
import CreateContact from "../../components/CreateContact";
import { AiOutlinePlus, AiFillApple } from "react-icons/ai";

const Home = () => {
    const [modal, setModal] = React.useState(false);
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 5000);
    }, []);

    return (
        <div className={Style.wrapper}>
            <div className={Style.content}>
                {loader ? (
                    <div className="progress-container">
                        <span className="apple">
                            <AiFillApple fill="#ffffff" size={45} />
                        </span>
                        <div className="progress" />
                    </div>
                ) : (
                    <>
                        <button className={Style.createButton} onClick={() => setModal(true)}>
                            <AiOutlinePlus />
                        </button>
                        <Search />
                        <Contacts />
                        <CreateContact isOpen={modal} onClose={() => setModal(false)} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Home
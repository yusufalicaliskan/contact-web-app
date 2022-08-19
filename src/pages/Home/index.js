import Style from "./style.module.css"
import Contacts from "../../components/Contacts";
import Search from "../../components/Search";

const Home = () => {
    return (
        <div className={Style.content}>
            <div>
                <button className={Style.createButton}>Create Contact</button>
                <Search />
                <Contacts />
            </div>
        </div>
    )
}

export default Home
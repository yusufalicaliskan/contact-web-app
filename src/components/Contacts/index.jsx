import Style from "./style.module.css"
import { useSelector, useDispatch } from 'react-redux'

const Contacts = () => {
    const contacts = useSelector(state => state.contacts.value)

    return (
        <ul className={Style.list}>
            {contacts.map((contact, index) => (
                <li key={index} className={Style.item}>
                    <button className={Style.button}>
                        <div className={Style.image}>
                            <img src={`https://joeschmoe.io/api/v1/${contact.name}`} className={Style.avatar} />
                            <span className={`${Style.status} ${contact.status ? Style.statusOn : Style.statusOff}`}></span>
                        </div>
                        <div className={Style.content}>
                            <h3 className={Style.name}>{contact.name} {contact.surname}</h3>
                            <small className={Style.phone}>{contact.phone}</small>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Contacts
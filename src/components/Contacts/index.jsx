import Style from "./style.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { deleteContactByPhone } from "../../state/contacts";
import { AiOutlineDelete } from "react-icons/ai"

const Contacts = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.value)
    const search = useSelector(state => state.search.value.search)

    const deleteItem = (contact) => {
        dispatch(deleteContactByPhone({
            value: contact
        }))
    }

    return (
        <ul className={Style.list}>
            {(search.length > 0 ? search : contacts).map((contact, index) => (
                <li key={index} className={Style.item}>
                    <Link to={`/profile?name=${contact.name}&surname=${contact.surname}`} className={Style.button}>
                        <div className={Style.image}>
                            <img src={`https://joeschmoe.io/api/v1/${contact.name}`} className={Style.avatar} alt={contact.name} />
                            <span className={`${Style.status} ${!contact.status ? Style.statusOn : Style.statusOff}`}></span>
                        </div>
                        <div className={Style.content}>
                            <h3 className={Style.name}>{contact.name} {contact.surname}</h3>
                            <small className={Style.phone}>{contact.phone}</small>
                        </div>
                        <div>
                            <button className={Style.delete} onClick={() => deleteItem(contact)}>
                                <AiOutlineDelete size={25} />
                            </button>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Contacts
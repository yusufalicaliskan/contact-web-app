import React from "react"
import Style from "./style.module.css"
import { useDispatch } from "react-redux"
import { addContact } from "../../state/contacts"

const CreateContact = ({
    onClose = () => undefined,
    isOpen = false,
}) => {
    const dispatch = useDispatch()
    const initialValue = {
        name: "",
        surname: "",
        tel: "",
        blocked: false,
    }
    const [data, setData] = React.useState(initialValue)

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(addContact({
            value: data
        }))
        setData(initialValue)
    }

    return (
        <div className={isOpen ? `${Style.opened} ${Style.modal}` : Style.modal}>
            <div className={Style.overlay} onClick={onClose} />
            <div className={Style.content}>
                <form onSubmit={onSubmit} className={Style.form}>
                    <div className={Style.formElement}>
                        <label htmlFor="name">Name *</label>
                        <input type="text" className={Style.textBox} value={data.name} onChange={event => setData({ ...data, name: event.currentTarget.value })} required />
                    </div>
                    <div className={Style.formElement}>
                        <label htmlFor="surname">Surname *</label>
                        <input type="text" className={Style.textBox} value={data.surname} onChange={event => setData({ ...data, surname: event.currentTarget.value })} required />
                    </div>
                    <div className={Style.formElement}>
                        <label htmlFor="tel">Phone *</label>
                        <input type="tel" className={Style.textBox} value={data.tel} onChange={event => setData({ ...data, tel: event.currentTarget.value })} required />
                    </div>
                    <div className={Style.formSwitchElement}>
                        <label htmlFor="status">Is Blocked?</label>
                        <div className={Style.switch}>
                            <input type="checkbox" checked={data.status} onChange={event => setData({ ...data, status: event.currentTarget.checked })} />
                            <span className={Style.slider} />
                        </div>
                    </div>
                    <button type="submit" className={Style.submit}>Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default CreateContact
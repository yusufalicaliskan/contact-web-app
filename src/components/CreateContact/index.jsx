import React from "react"
import Style from "./style.module.css"

const CreateContact = ({
    onClose = () => undefined,
    isOpen = false,
}) => {
    const [data, setData] = React.useState({
        name: "",
        surname: "",
        email: "",
        tel: "",
        job: "",
        age: 0,
        location: "",
        website: "",
        status: false,
    })

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className={isOpen ? `${Style.opened} ${Style.modal}` : Style.modal}>
            <div className={Style.overlay} onClick={onClose} />
            <div className={Style.content}>
                <form onSubmit={onSubmit} className={Style.form}>
                    <div className={Style.formElement}>
                        <label htmlFor="name">Name *</label>
                        <input type="text" className={Style.textBox} value={data.name} onChange={event => setData({ ...data, name: event.currentTarget.value })} />
                    </div>
                    <div className={Style.formElement}>
                        <label htmlFor="surname">Surname *</label>
                        <input type="text" className={Style.textBox} value={data.surname} onChange={event => setData({ ...data, surname: event.currentTarget.value })} />
                    </div>
                    <div className={Style.formElement}>
                        <label htmlFor="tel">Phone *</label>
                        <input type="tel" className={Style.textBox} value={data.tel} onChange={event => setData({ ...data, tel: event.currentTarget.value })} />
                    </div>
                    <div className={Style.formElement}>
                        <label htmlFor="status">Is Blocked?</label>
                        <input type="checkbox" checked={data.status} onChange={event => setData({ ...data, status: event.currentTarget.checked })} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateContact
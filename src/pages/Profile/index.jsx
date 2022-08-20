/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../../state/contacts";
import Style from "./style.module.css"

const Profile = () => {
    const { search } = useLocation();
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.value);

    const [data, setData] = React.useState({
        name: "",
        surname: "",
        tel: "",
        blocked: false,
    });

    const getContact = () => {
        const params = new URLSearchParams(search)

        return {
            name: params.get("name"),
            surname: params.get("surname")
        }
    }

    React.useEffect(() => {
        const { name, surname } = getContact();
        const filter = contacts.filter(item => item.name.match(name) && item.surname.match(surname))

        if(filter.length > 0) {
            setData(filter[0]);
        }

    }, [search]);

    const onSubmit = (event) => {
        event.preventDefault();

        const { name, surname } = getContact();
        const filtered = contacts.filter(item => !item.name.match(name) && !item.surname.match(surname))
        
        
        dispatch(updateContact({
            value: [...filtered, data]
        }))
    }

    return (
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
            <Link to="/" className={Style.back}>Back to Home</Link>
            <button type="submit" className={Style.submit}>Update Contact</button>
        </form>
    )
};

export default Profile;
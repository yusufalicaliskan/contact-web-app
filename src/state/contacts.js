import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify"

const initialState = {
    value: [
        {
            name: "Yusuf Ali",
            surname: "Çalışkan",
            tel: "05377953854",
            blocked: true,
        },
    ],
}

export const Contacts = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        getContacts: (state) => {
            const contacts = sessionStorage.getItem("contacts")

            if(contacts) {
               state.value = JSON.parse(contacts)
            } else {
                state.value = initialState.value
                sessionStorage.setItem("contacts", JSON.stringify(state.value))
            }
        },
        addContact: (state, action) => {
            const { name, surname, tel } = action.payload.value;
            const filterByPhone = state.value.filter(item => item.tel === tel)
            const filterByName = state.value.filter(item => item.name.toLocaleLowerCase().match(name.trim().toLocaleLowerCase()) && item.surname.toLocaleLowerCase().match(surname.toLocaleLowerCase()))

            if(filterByPhone.length > 0) {
                toast.error("This number has already been added" )
            } else if(filterByName.length > 0) {
                toast.error("This contact has already been added" )
            } else {
                state.value.push(action.payload.value)
                sessionStorage.setItem("contacts", JSON.stringify(state.value))
                toast.success("New contact added!")
            }
        },
        deleteContact: (state, action) => {
            state.value = [...state.value.filter(item => item.tel !== action.payload.value.tel)]
            sessionStorage.setItem("contacts", JSON.stringify(state.value))
            toast.success("Deleted contact!")
        }
    },
})

export const { addContact, deleteContact, getContacts } = Contacts.actions
export default Contacts.reducer
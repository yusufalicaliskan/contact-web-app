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
        addContact: (state, action) => {
            const filterByPhone = state.value.filter(item => item.tel === action.payload.value.tel)
            const filterByName = state.value.filter(item => item.name.toLocaleLowerCase().match(action.payload.value.name.trim().toLocaleLowerCase()) && item.surname.toLocaleLowerCase().match(action.payload.value.surname.toLocaleLowerCase()))

            if(filterByPhone.length > 0) {
                toast.error("This number has already been added" )
            } else if(filterByName.length > 0) {
                toast.error("This contact has already been added" )
            } else {
                state.value.push(action.payload.value)
                toast.success("New contact added!" )
            }
        },
    },
})

export const { addContact } = Contacts.actions
export default Contacts.reducer
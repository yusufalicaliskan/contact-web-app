import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const Contacts = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state) => {

        },
    },
})

export const { addContact } = Contacts.actions
export default Contacts.reducer
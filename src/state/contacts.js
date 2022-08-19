import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [
        {
            name: "Yusuf Ali",
            surname: "Çalışkan",
            phone: "05377953854",
            email: "yusufalicaliskan@gmail.com",
            job: "Frontend Developer",
            company: "Coino",
            age: 25,
            location: "İstanbul, Turkey",
            website: "https://github.com/yusufalicaliskan",
            status: true,
        },
    ],
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
import { configureStore } from '@reduxjs/toolkit'
import contacts from "./contacts"
import search from "./search"

const store = configureStore({
    reducer: {
        contacts,
        search
    },
})

export default store
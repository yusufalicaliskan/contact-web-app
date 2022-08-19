import { configureStore } from '@reduxjs/toolkit'
import contacts from "./contacts"

const store = configureStore({
    reducer: {
        contacts
    },
})

export default store
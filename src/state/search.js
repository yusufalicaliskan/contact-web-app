import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify"

const initialState = {
    value: {
        keyword: "",
        search: []
    },
}

export const Search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search: (state, action) => {
            const { keyword, contacts } = action.payload.value;

            if(keyword.trim().length === 0) {
                toast.error("Please enter the value");
            } else {
                const searchKey = keyword.trim().toLocaleLowerCase()
                state.value.search = contacts.filter(item => item.name.toLocaleLowerCase().includes(searchKey) || item.surname.toLocaleLowerCase().includes(searchKey))
            }
        },
    },
})

export const { search } = Search.actions
export default Search.reducer
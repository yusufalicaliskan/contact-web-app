import { createSlice } from '@reduxjs/toolkit'

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
                state.value.search = []
            } else {
                const searchKey = keyword.trim().toLocaleLowerCase()
                state.value.search = contacts.filter(item => item.name.toLocaleLowerCase().includes(searchKey) || item.surname.toLocaleLowerCase().includes(searchKey))
            }
        },
    },
})

export const { search } = Search.actions
export default Search.reducer
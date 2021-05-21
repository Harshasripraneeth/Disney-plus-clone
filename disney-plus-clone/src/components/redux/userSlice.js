import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) =>{

            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },
        setSignOutState: state =>{
            state.name = ""
            state.email = ""
            state.photo = ""
        },
    },
})

export const {setUserDetails, setSignOutState} = userSlice.actions
export default userSlice.reducer
export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo

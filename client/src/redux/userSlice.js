import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: [],
		isFetching: false,
		error: '',
	},
	reducers: {
		loginStart: (state, action) => {
			console.log('login start')
			state.isFetching = true
			state.error = ""
		},
		loginSuccess: (state, action) => {
			console.log('login success')
			state.isFetching = false
			state.currentUser = action.payload
			state.error = ""
		}, loginFailure: (state, action) => {
			console.log('login failure')
			state.isFetching = false
			state.error = action.payload
		}
	}
})

export const { loginStart, loginSuccess, loginFailure, } = userSlice.actions
export default userSlice.reducer;
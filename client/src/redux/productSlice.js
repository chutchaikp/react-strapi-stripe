import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
		isFetching: false,
		error: '',
	},
	reducers: {
		initProducts: (state, action) => {
			state.products = action.payload
			state.error = ''
		},
	}
})

export const { initProducts } = userSlice.actions
export default userSlice.reducer;
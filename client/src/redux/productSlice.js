import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
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

export const { initProducts } = productSlice.actions
export default productSlice.reducer;
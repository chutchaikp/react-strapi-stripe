import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: 'user',
	initialState: {
		items: [], // [ { product: {}, quantity: 1, } ]
		isFetching: false,
		error: '',
	},
	reducers: {
		addItem: (state, action) => {
			// { product: {}, quantity: 1 }
			state.items = [...state.items, action.payload]
		},
		removeItem: (state, action) => {
			debugger;
			// remove product
			// .filter
		},
		resetItems: (state) => {
			debugger;
			state.items = []
		},
		increseQuantity: (state, action) => {
			state.items = state.items.map(it => {
				if (it.product.id === action.payload.id) {
					return { ...it, quantity: it.quantity + 1 }
				}
				return it
			})
		},
		decreaseQuantity: (state, action) => {
			// product = action.payload
			state.items = state.items.map(it => {
				if (it.product.id === action.payload.id) {
					return { ...it, quantity: it.quantity - 1 }
				}
				return it
			})
		}
	}
})

export const { addItem, removeItem, resetItems, increseQuantity, decreaseQuantity, } = userSlice.actions
export default userSlice.reducer;
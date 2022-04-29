import { TOGGLE_CART_DROPDOWN, ADD_ITEM, DELETE_ITEMS, DECREASE_ITEM } from "./cartTypes";

export const toggleCartDropdown = () => {
	return {
		type: TOGGLE_CART_DROPDOWN
	}
}

export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		payload: item
	}
}

export const deleteItems = (item) => {
	return {
		type: DELETE_ITEMS,
		payload: item
	}
}

export const decreaseItem = (item) => {
	return {
		type: DECREASE_ITEM,
		payload: item
	}
}
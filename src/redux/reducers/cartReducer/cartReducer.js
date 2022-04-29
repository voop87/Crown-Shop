import { TOGGLE_CART_DROPDOWN, ADD_ITEM, DELETE_ITEMS, DECREASE_ITEM } from "./cartTypes";
import { addItemToCart, decreaseItemFromCart } from "./cartUtils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden
			}
		
		case ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		
		case DECREASE_ITEM:
			return {
				...state,
				cartItems: decreaseItemFromCart(state.cartItems, action.payload)
			}

		case DELETE_ITEMS:
			return {
				...state,
				cartItems: state.cartItems.filter(
					cartItem => cartItem.id !== action.payload.id
				)
			}
	
		default:
			return state;
	}
}

export default cartReducer;
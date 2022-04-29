// Используется для мемоизации необходимых значений, чтобы избежать ненужного ререндера

import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((totalQuantity, cartItem) => {
			return totalQuantity + cartItem.quantity;
		}, 0)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((totalPrice, cartItem) => {
			return totalPrice + cartItem.quantity * cartItem.price;
		}, 0)
)
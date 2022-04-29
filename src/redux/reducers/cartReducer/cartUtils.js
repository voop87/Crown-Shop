export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingItem) {
		return cartItems.map(
			cartItem => 
				cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}

	return [ ...cartItems, { ...cartItemToAdd, quantity: 1} ]
}

export const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
	const existingItem = cartItems.find(
		cartItem => cartItem.id === cartItemToDecrease.id
	);

	if (existingItem.quantity === 1) {
		return cartItems.filter(
			cartItem => cartItem.id !== cartItemToDecrease.id
		)
	}

	return cartItems.map(
		cartItem => 
			cartItem.id === cartItemToDecrease.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
}
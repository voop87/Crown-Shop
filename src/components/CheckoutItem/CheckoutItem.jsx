import React from "react";
import { connect } from "react-redux";

import './CheckoutItem.scss';
import { addItem, decreaseItem, deleteItems } from "../../redux/reducers/cartReducer/cartActions";

const CheckoutItem = ({ cartItem, deleteItems, addItem, decreaseItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;

	return (
		<div className="checkout-item">
			<div className="image">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<button
					type="button"
					className="arrow"
					onClick={() => decreaseItem(cartItem)}
				>&#10094;</button>
				<span className="value">{quantity}</span>
				<button
					type="button"
					className="arrow"
					onClick={() => addItem(cartItem)}
				>&#10095;</button>
			</span>
			<span className="price">${price}</span>
			<button className="remove-btn" onClick={() => deleteItems(cartItem)}>&#10005;</button>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		deleteItems: item => dispatch(deleteItems(item)),
		addItem: item => dispatch(addItem(item)),
		decreaseItem: item => dispatch(decreaseItem(item))
	}
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import './CartDropdown.scss';
import { selectCartItems } from "../../redux/reducers/cartReducer/cartSelectors";

import CustomBtn from "../CustomBtn/CustomBtn";
import CartItem from "../CartItem/CartItem";
import { toggleCartDropdown } from "../../redux/reducers/cartReducer/cartActions";

const CartDropdown = ({ cartItems, dispatch }) => {
	const navigate = useNavigate();
	function handleClick() {
		navigate('/checkout');
		dispatch(toggleCartDropdown());
	}

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{
					cartItems.map((cartItem) => {
						return (
							<CartItem key={cartItem.id} cartItem={cartItem} />
						);
					})
				}
			</div>
			<CustomBtn onClick={handleClick}>Go to Checkout</CustomBtn>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
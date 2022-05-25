import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/reducers/cartReducer/cartSelectors";

import './CheckoutPage.scss';

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeBtn from "../../components/StripeBtn/StripeBtn";

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<header className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</header>

			{
				cartItems.map(cartItem => {
					return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
				})
			}

			<footer className="total">
				<span>TOTAL: ${total}</span>
				<div>
					<p className="test-warning">
						*Please use the following test credit card for payments*
						<br />
						4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
					</p>
					<StripeBtn price={total} />
				</div>
			</footer>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
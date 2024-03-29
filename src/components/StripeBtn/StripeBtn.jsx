import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_qblFNYngBkEdjEZ16jxxoWSM';

	const onToken = token => {
		console.log(token);
		alert('Payment successfull!');
	}

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="./crown.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}

export default StripeBtn;
import React from "react";

import './CustomBtn.scss';

const CustomBtn = ({ children, inverted, isGoogleSignIn, ...otherProps }) => {
	return (
		<button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-signin-btn' : ''} custom-btn`} {...otherProps}>
			{children}
		</button>
	);
}

export default CustomBtn;
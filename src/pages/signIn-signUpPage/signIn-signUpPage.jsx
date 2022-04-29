import React from "react";

import './signIn-signUpPage.scss';

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInSignUpPage = () => {
	return (
		<div className="signIn-and-signUp">
			<SignIn />
			<SignUp />
		</div>
	)
}

export default SignInSignUpPage;
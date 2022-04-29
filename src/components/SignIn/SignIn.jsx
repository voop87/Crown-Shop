import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import CustomBtn from "../CustomBtn/CustomBtn";
import FormInput from "../FormInput/FormInput";


import './SignIn.scss';

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			this.setState({
				email: '',
				password: ''
			});
		} catch (error) {
			console.log(error);
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password.</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomBtn type='submit' >Sign in</CustomBtn>
						<CustomBtn type='button' onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomBtn>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
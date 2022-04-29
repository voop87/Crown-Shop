import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './SignUp.scss';

import FormInput from "../FormInput/FormInput";
import CustomBtn from "../CustomBtn/CustomBtn";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleChange = (evt) => {
		const { name, value } = evt.target;

		this.setState({ [name]: value });
	}

	handleSubmit = async (evt) => {
		evt.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords don't match!");
			return;
		}

		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						label='Display name'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						label='Email'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						label='Password'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						label='Confirm password'
						handleChange={this.handleChange}
						required
					/>

					<CustomBtn type='submit'>Sign Up</CustomBtn>
				</form>
			</div>
		);
	}
}

export default SignUp;
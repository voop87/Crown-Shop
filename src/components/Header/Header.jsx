import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCurrentUser } from "../../redux/reducers/userReducer/userSelectors";
import { selectCartHidden } from "../../redux/reducers/cartReducer/cartSelectors";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
	return (
		<header className="header">
			<Link className="logo-container" to={'/'}>
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to={'/shop'}>Shop</Link>
				<Link className="option" to={'/contact'}>Contact</Link>
				{
					currentUser ?
						<button className="option" type="button" onClick={() => auth.signOut()}>Sign out</button>
						:
						<Link className="option" to={'/signin'}>Sign In</Link>
				}
				<CartIcon />
			</div>
			{
				hidden ? null : <CartDropdown />
			}
		</header>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
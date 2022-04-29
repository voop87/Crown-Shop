import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartDropdown } from "../../redux/reducers/cartReducer/cartActions";
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from "../../redux/reducers/cartReducer/cartSelectors";

const CartIcon = ({ toggleCartDropdown, itemsCount }) => {
	return (
		<button
			type="button"
			className="cart-icon"
			onClick={toggleCartDropdown}
			disabled={itemsCount === 0}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemsCount}</span>
		</button>
	);
};

const mapStateToProps = createStructuredSelector({
	itemsCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartDropdown: () => dispatch(toggleCartDropdown())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
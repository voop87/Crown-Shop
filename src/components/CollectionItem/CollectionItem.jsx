import React from "react";
import { connect } from "react-redux";

import CustomBtn from "../CustomBtn/CustomBtn";

import './CollectionItem.scss';
import { addItem } from "../../redux/reducers/cartReducer/cartActions";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			>
			</div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomBtn onClick={() => addItem(item)} inverted>Add to cart</CustomBtn>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(addItem(item))
	}
}

export default connect(null, mapDispatchToProps)(CollectionItem);
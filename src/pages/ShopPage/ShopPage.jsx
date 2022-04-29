import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import './ShopPage.scss';
import { selectShopCollections } from "../../redux/reducers/shopReducer/shopSelectors";

import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

const ShopPage = ({ collections }) => {
	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
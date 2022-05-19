import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import './CollectionOverview.scss';
import { selectShopCollectionsForOverview } from "../../redux/reducers/shopReducer/shopSelectors";

import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

const CollectionOverview = ({ collections }) => {

	return (
		<div className="collection-overview">
			{

				collections.map(({ id, ...otherCollectionProps }) => (
					<PreviewCollection key={id} {...otherCollectionProps} />
				))
			}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionsForOverview
});

export default connect(mapStateToProps)(CollectionOverview);
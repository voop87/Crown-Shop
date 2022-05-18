import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

import './CollectionPage.scss';



const CollectionPage = ({ collections }) => {
	const { collectionId } = useParams();

	const COLLECTION_ID_MAP = {
		hats: 1,
		sneakers: 2,
		jackets: 3,
		womens: 4,
		mens: 5
	}

	const collection = collections.find(
		collection => {
			return collection.id === COLLECTION_ID_MAP[collectionId]
		}
	);

	return (
		<div className="collection">
			<h1 className="title">
				{collection.title}
			</h1>
			<div className="preview">
				{
					collection.items.map(item => {
						return <CollectionItem key={item.id} item={item} />
					})
				}
			</div>
		</div>
	);
};

//не получается сделать через селектор, разобраться
const mapStateToProps = (state) => {
	return {
		collections: state.shop.collections
	}
}

export default connect(mapStateToProps)(CollectionPage);
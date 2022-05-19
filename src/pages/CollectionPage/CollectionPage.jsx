import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

import './CollectionPage.scss';



const CollectionPage = ({ collections }) => {
	const { collectionId } = useParams();

	const collection = collections[collectionId];

	const { title, items } = collection;

	return (
		<div className="collection">
			<h1 className="title">
				{title}
			</h1>
			<div className="items">
				{
					items.map(item => {
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
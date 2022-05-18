import React from "react";
import { Route, Routes } from "react-router-dom";

import './ShopPage.scss';

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

const ShopPage = () => {
	return (
		<div className="shop-page">
			<Routes>
				<Route exact path='/' element={<CollectionOverview />} />
				<Route path=':collectionId' element={<CollectionPage />} />
			</Routes>
		</div>
	);
}

export default ShopPage;
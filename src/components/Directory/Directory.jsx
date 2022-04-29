import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";
import { selectDirectorySections } from "../../redux/reducers/directoryReducer/directorySelectors";

const Directory = ({ sections }) => {
	return (
		<ul className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => {
				return (
					<MenuItem key={id} {...otherSectionProps} />
				);
			})}
		</ul>
	);
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
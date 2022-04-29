import React from "react";
import { useNavigate } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const history = useNavigate();
	return (
		<li
			className={`${size} menu-item`}
			onClick={() => history(`${linkUrl}`)}
		>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="content">
				<h2 className="title">{title}</h2>
				<span className="subtitle">shop now</span>
			</div>
		</li>
	);
};

export default MenuItem;
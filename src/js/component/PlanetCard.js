import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { number, string } from "prop-types";

import { Context } from "../store/appContext";

export default function CharacterCard({ name, population, terrain, id }) {
	const [isFavourite, setIsFavourite] = useState(false);
	const { actions, store } = useContext(Context);

	useEffect(
		() => {
			if (store.favourites.length != 0)
				for (let i = 0; i < store.favourites.length; i++) {
					if (store.favourites[i] === name) {
						setIsFavourite(true);
						break;
					} else setIsFavourite(false);
				}
			else setIsFavourite(false);
		},
		[store.favourites]
	);

	return (
		<div className="card p-0 m-2 col-3">
			<img
				className="card-img-top"
				src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c3418ca7a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c3418ca7a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
			/>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<h6 className="card-text">Population: {population}</h6>
				<h6 className="card-text">Terrain: {terrain}</h6>
				<div>
					<Link to={`/planet/${id}`}>
						<button className="btn btn-outline-primary" style={{ marginRight: "12px" }}>
							Learn more!
						</button>
					</Link>
					{isFavourite ? (
						<button
							className="btn btn-outline-warning"
							onClick={() => {
								actions.removeFavourite(name);
							}}>
							<i className="fas fa-heart" />
						</button>
					) : (
						<button
							className="btn btn-outline-warning"
							onClick={() => {
								actions.addFavourite(name);
							}}>
							<i className="far fa-heart" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

CharacterCard.propTypes = {
	name: string,
	population: string,
	terrain: string,
	id: number
};

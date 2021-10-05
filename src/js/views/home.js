import React, { useContext } from "react";

import { Context } from "../store/appContext";
import CharacterCard from "../component/CharacterCard";
import PlanetCard from "../component/PlanetCard";
import "../../styles/home.scss";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="container d-flex overflow-auto pb-3 mb-3">
				{store.characters.map(({ name, gender, eye_color, hair_color }, index) => (
					<CharacterCard
						key={name + index}
						name={name}
						gender={gender}
						eyes={eye_color}
						hair={hair_color}
						id={index + 1}
					/>
				))}
			</div>
			<h1 className="text-danger">Planets</h1>
			<div className="container d-flex overflow-auto pb-3">
				{store.planets.map(({ name, population, terrain }, index) => (
					<PlanetCard
						key={name + index}
						name={name}
						population={population}
						terrain={terrain}
						id={index + 1}
					/>
				))}
			</div>
		</div>
	);
};

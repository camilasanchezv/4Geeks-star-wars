import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import ViewComponent from "../component/ViewComponent";

export default function PlanetView() {
	const { id } = useParams();
	const { store } = useContext(Context);
	const [information, setInformation] = useState();

	useEffect(
		() => {
			setInformation(store.planets[parseInt(id) - 1]);
		},
		[store.planets]
	);

	return (
		<div className="container">
			{information && (
				<ViewComponent
					isPlanet
					title={information.name}
					first={information.climate}
					second={information.population}
					third={information.orbital_period}
					fourth={information.rotation_period}
					fifth={information.diameter}
				/>
			)}
		</div>
	);
}

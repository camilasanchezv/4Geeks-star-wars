import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import ViewComponent from "../component/ViewComponent";

export default function CharacterView() {
	const { id } = useParams();
	const { store } = useContext(Context);
	const [information, setInformation] = useState();

	useEffect(
		() => {
			setInformation(store.characters[parseInt(id) - 1]);
		},
		[store.planets]
	);

	return (
		<div className="container">
			{information && (
				<ViewComponent
					title={information.name}
					first={information.birth_year}
					second={information.gender}
					third={information.height}
					fourth={information.skin_color}
					fifth={information.eye_color}
				/>
			)}
		</div>
	);
}

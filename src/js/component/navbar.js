import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img
						className="navbar-brand m-2"
						style={{ height: "70px" }}
						alt="Star Wars Logo"
						src="https://es.logodownload.org/wp-content/uploads/2020/09/star-wars-logo-3-11-1024x443.png"
					/>
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle d-flex align-items-center"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favourites
						<div className="bg-secondary mx-2 px-1 rounded">{store.favourites.length}</div>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favourites.length != 0 ? (
							store.favourites.map((name, index) => (
								<li
									key={name + index}
									className="d-flex justify-content-between align-items-center mx-2">
									{name}
									<i
										className="fas fa-trash"
										style={{ cursor: "pointer" }}
										onClick={() => actions.removeFavourite(name)}
									/>
								</li>
							))
						) : (
							<li className="mx-2">(empty)</li>
						)}
					</ul>
				</div>
			</div>
			<div className="ml-auto" />
		</nav>
	);
};

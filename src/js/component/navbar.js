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
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a className="dropdown-item" href="#">
								Action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Another action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</li>
					</ul>
				</div>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle d-flex align-items-center"
						type="button"
						id="dropdown"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favourites
						<div className="bg-secondary mx-2 px-1 rounded">{store.favourites.length}</div>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdown">
						{store.favourites.length != 0 ? (
							store.favourites.map((name, index) => (
								<li key={name + index}>
									{name}
									<i className="fas fa-trash" onClick={() => actions.removeFavourite(name)} />
								</li>
							))
						) : (
							<li>(empty)</li>
						)}
					</ul>
				</div>
			</div>
			<div className="ml-auto" />
		</nav>
	);
};

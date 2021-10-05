import React from "react";
import { string, bool } from "prop-types";

export default function ViewComponent({ title, isPlanet = false, first, second, third, fourth, fifth }) {
	return (
		<div className="jumbotron">
			<div className="d-flex">
				<img
					src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c3418ca7a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c3418ca7a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
					style={{ width: "50%" }}
				/>
				<div className="px-4 text-center" style={{ width: "50%" }}>
					<h1>{title}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque arcu in
						tellus sagittis aliquet. Ut luctus justo a pulvinar euismod. Curabitur cursus convallis lectus
						eu ultricies. Curabitur eu elit vel ipsum volutpat volutpat. Pellentesque lacinia ex a egestas
						sollicitudin. Proin tempor dui sit amet purus laoreet vulputate. Duis id nisl eu magna molestie
						fermentum.
					</p>
				</div>
			</div>
			<hr className="my-4 bg-danger" style={{ height: "2px" }} />
			<div className="row container text-danger">
				<div className="col">
					<h6>Name</h6>
					<h6>{title}</h6>
				</div>
				{isPlanet ? (
					<>
						<div className="col">
							<h6>Climate</h6>
							<h6>{first}</h6>
						</div>
						<div className="col">
							<h6>Population</h6>
							<h6>{second}</h6>
						</div>
						<div className="col">
							<h6>Orbital Period</h6>
							<h6>{third}</h6>
						</div>
						<div className="col">
							<h6>Rotation Period</h6>
							<h6>{fourth}</h6>
						</div>
						<div className="col">
							<h6>Diameter</h6>
							<h6>{fifth}</h6>
						</div>
					</>
				) : (
					<>
						<div className="col">
							<h6>Birth Year</h6>
							<h6>{first}</h6>
						</div>
						<div className="col">
							<h6>Gender</h6>
							<h6>{second}</h6>
						</div>
						<div className="col">
							<h6>Height</h6>
							<h6>{third}</h6>
						</div>
						<div className="col">
							<h6>Skin Color</h6>
							<h6>{fourth}</h6>
						</div>
						<div className="col">
							<h6>Eye Color</h6>
							<h6>{fifth}</h6>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

ViewComponent.propTypes = {
	title: string,
	isPlanet: bool,
	first: string,
	second: string,
	third: string,
	fourth: string,
	fifth: string
};

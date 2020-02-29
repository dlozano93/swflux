import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<div className="dropdown">
			<a
				className="btn btn-secondary dropdown-toggle"
				href="#"
				role="button"
				id="dropdownMenuLink"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Dropdown link
			</a>

			<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
				<a className="dropdown-item" href="#">
					Action
				</a>
				<a className="dropdown-item" href="#">
					Another action
				</a>
				<a className="dropdown-item" href="#">
					Something else here
				</a>
			</div>
		</div>
	</div>
);

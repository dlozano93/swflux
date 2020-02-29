import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const [dropDown, setDropDown] = useState([]);
	useEffect(() => {
		fetch("https://swapi.co/api/")
			.then(resp => resp.json())
			.then(data => {
				setDropDown(Object.keys(data));
				console.log(Object.keys(data));
			});
	}, []);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{dropDown.map((item, index) => {
						return (
							<Dropdown.Item key={index}>
								{" "}
								<Link to={`/${item}`}>{item}</Link>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};

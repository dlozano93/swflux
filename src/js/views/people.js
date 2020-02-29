import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const People = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data.results);
				console.log(data.results);
			});
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-sm-1 bg-dark" />
				<div className="col bg-dark text-center">
					{people.map((item, index) => {
						return (
							<div
								className="
								d-inline-block
								border
								bg-light
								p-1
								rounded-sm
								my-5
								py-5
								px-5
								mx-5 "
								key={index}>
								<span>{"name: " + item.name}</span>
								<br />
								<span>{"height: " + item.height + " meters"}</span>
								<br />
								<span>
									weight:
									<strong>{" " + item.mass + " Kg"}</strong>
								</span>
							</div>
						);
					})}
				</div>
				<div className="col-sm-1 bg-dark" />
			</div>
			)
		</>
	);
};

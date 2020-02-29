import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Species = () => {
	const [species, setSpecies] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				setSpecies(data.results);
				console.log(data.results);
			});
	}, []);

	return (
		<div className="col bg-dark text-center">
			{species.map((item, index) => {
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
					</div>
				);
			})}
		</div>
	);
};

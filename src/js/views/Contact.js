import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);

return <li
			key={index}
			className="list-group-item d-flex justify-content-between"
			style={{ background: item.background }}
		>
			<Link to={"/single/" + index}>
				<span>Link to: {item.title}</span>
			</Link>
				
			<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
				Change Color
			</button>
		</li>
		
	
};

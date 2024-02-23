import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contact = ({index, item}) => {
	const { actions } = useContext(Context);

return <>
	<Link to={"/single/" + index}>
		<span>Link to: {item.title}</span>
	</Link>
				
	<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
		Change Color
	</button>
</>
};

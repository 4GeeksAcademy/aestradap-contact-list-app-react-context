import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

 


export const Contact = ({index, item}) => {
	const { actions } = useContext(Context);

return <div class="container text-center">
	<div class="row">
		<div class="col">
		<img src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1708803073~exp=1708803673~hmac=cb2de4e72dba360eaeb15a5deefaf493ddcaca83e6b9ee721bbf983aedfdbf99"
		 alt="Avatar" style={{width:200, borderRadius: 50}}/>
			
		</div>
		<div class="col">
			<i className="bi bi-pencil-square"></i>
					<i class="bi bi-trash3"></i>
		</div>
		<div class="col">
			<i className="bi bi-pencil-square"></i>
					<i class="bi bi-trash3"></i>
		</div>
	</div>

	

	
	
	{/* <Link to={"/single/" + index}>
					<i className="bi bi-icon_name"></i>
						<span>Link to: {item.title}</span>
					</Link> */}
	{/* <button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
		Change Color
	</button> */}
	
	{/* <i className="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i> */}
	 
</div>
};

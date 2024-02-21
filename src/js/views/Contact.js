import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
		 <div className="text-bg-dark p-3">Esto es un contacto</div>
		</div>
	);
};

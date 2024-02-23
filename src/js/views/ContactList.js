
import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Contact } from "./Contact";

import "../../styles/demo.css";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-2">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}
						>
							<Contact index={index} item={item} />
					
						</li>
					);
				})}
			</ul>
		</div>
	);
};

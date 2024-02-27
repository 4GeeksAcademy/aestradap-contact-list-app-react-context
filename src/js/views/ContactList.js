
import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Contact } from "./Contact";

import "../../styles/demo.css";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	// useEffect(()=>{
	// 	if(store.agendaSlug !== "")
	// 	actions.loadMyContacts(store.agendaSlug);
	// },[]);


	return <ul className="list-group">
		{store.myContacts.map((contact, index) => {
			return (
				<li
					key={index}
					className="list-group-item d-flex justify-content-between"
				>
					<Contact index={index} contact={contact} />
			
				</li>
			);
		})}
	</ul>
};

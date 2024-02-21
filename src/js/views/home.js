import React from "react";
import "../../styles/home.css";
import { ContactList } from "./ContactList";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Home-Agendas</h1>
	
		<ContactList />
		
	</div>
);

import React from "react";
import "../../styles/home.css";
import { Agendas } from "./Agendas";
import { ContactList } from "./ContactList";

export const Home = () => (
	<div className="container text-center mt-5">
		
		<h1>Home-Agendas</h1>
		<Agendas />
		<ContactList />
	
	</div>
);

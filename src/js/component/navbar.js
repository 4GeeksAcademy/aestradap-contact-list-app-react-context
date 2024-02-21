import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar fixed-top bg-dark border-bottom border-body" data-bs-theme="dark">
			<div className="container-fluid">
				<div>
					<a className="navbar-brand" href="/">Agendas-Contacts</a>
				</div>
				<div>
					<Link to="/">
						<span className="navbar-brand mb-0 h1">React Boilerplate</span>
					</Link>	
				</div>
				<div className="ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
				</div>
			</div>
		</nav>
	);
};

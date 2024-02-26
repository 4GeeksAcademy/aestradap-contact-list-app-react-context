import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ManageContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
           <div className="text-center">
            <h1>Add a new contact</h1>
            {/* <h1>Edit contact</h1> */}

           </div>
			<form>
                <div className="mb-3 mt-2">
                    <label className="form-label">Full Name</label>
                    <input type="text"  placeholder="Full Name" className="form-control"/>
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Email</label>
                    <input type="email" placeholder="Email" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Phone</label>
                    <input type="number" placeholder="Phone" className="form-control" />
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Address</label>
                    <input type="text" placeholder="Address" className="form-control"/>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/">
                        <button className="btn btn-primary">Back home</button>
                    </Link>
                </div>
                
            </form>
		</div>
	);
};

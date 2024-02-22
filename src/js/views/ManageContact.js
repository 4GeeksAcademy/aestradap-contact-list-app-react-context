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
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
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

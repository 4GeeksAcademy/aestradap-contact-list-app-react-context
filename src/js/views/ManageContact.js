import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ManageContact = () => {
    const navigate = useNavigate();
    const params = useParams();

	const { store, actions } = useContext(Context);
   
    const [ toSubmit, setToSubmit ] = useState({});

        useEffect(() => {
            if(params.id){
                actions.getContact(params.id)
                .then(contact => setToSubmit(contact));
            }else{
                setToSubmit({
                    full_name: "Dave Bradley",
                    email: "dave@gmail.com",
                    agenda_slug: store.agenda_slug,
                    address:"47568 NW 34ST, 33434 FL, USA",
                    phone:"7864445566" 
                 })
            }
        }, [params.id])

    const handleChange = ({name, value}) => {
        setToSubmit(prevent => ({
            ...prevent,
            [name]:value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        actions.createContact(toSubmit);
        navigate("/");
      };
    

	return <>
		<div className="container mt-5">
           <div className="text-center">
            {params.id 
                ? <h1>Edit contact on {store.agenda_slug}</h1>
                : <h1>Add a new contact on {store.agenda_slug}</h1>
            }
           
           </div>
			<form onSubmit={handleSubmit}>
                <div className="mb-3 mt-2">
                    <label className="form-label">Full Name</label>
                    <input type="text" 
                     placeholder="Full Name" 
                     className="form-control"
                     name="full_name"
                     value={toSubmit.full_name}
                     onChange={(event) => handleChange(event.target)}
                     />
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Email</label>
                    <input type="email" 
                    placeholder="Email" 
                    className="form-control"
                    name="email"
                    value={toSubmit.email}
                    onChange={(event) => handleChange(event.target)}
                    />
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Phone</label>
                    <input type="number"
                     placeholder="Phone" 
                     className="form-control"
                     name="phone"
                     value ={toSubmit.phone}
                     onChange={(event) => handleChange(event.target)}
                    />
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Address</label>
                    <input type="text"
                     placeholder="Address"
                     className="form-control"
                     name="address"
                     value={toSubmit.address}
                     onChange={(event) => handleChange(event.target)}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/">
                        <button className="btn btn-primary">Back home</button>
                    </Link>
                </div>
                
            </form>
		</div>
    </>
};

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

 


export const Contact = ({index, contact}) => {
	const { actions } = useContext(Context);
	const navigate = useNavigate();

return <div className="container text-center">
	<div className="row">
		<div className="col">
		<img src="https://github.com/4GeeksAcademy/aestradap-react-hello-webapp/blob/master/src/img/img_avatar.png?raw=true"
		 alt="Avatar" style={{width:150, borderRadius: 100}}/>
			
		</div>
		<div className="col d-flex align-items-center">
		
			<div className="text-start">
				<label class="form-label fs-4">{ contact.full_name }</label>
				<div className="form-text fs-6">
					<i class="bi bi-geo-alt-fill"/> { contact.address }
				</div>
				<div className="form-text fs-6">
					<i class="bi bi-telephone-fill"/> { contact.phone }
				</div>
				<div className="form-text fs-6">
					<i class="bi bi-envelope-fill"/> { contact.email }
				</div>
			</div>
		</div>
		<div className="col d-flex align-items-center justify-content-center">
		<button 
			className= "btn border border-0 mx-10"
				type="button"
				onClick={() => navigate(`/contact/${contact.id}`) } 
				
          >     
         <i className="bi bi-pencil-fill me-5" style={{fontSize: 30}} />
        </button> 
			
			<button 
			className= "btn border border-0 mx-10"
				type="button"
				onClick={ ()=>{ actions.deleteContact(contact.id, contact.agenda_slug) } }
          >     
           <i className="bi bi-trash3-fill" style={{fontSize: 30}} />
        </button> 
			
		</div>
	</div>
	
</div>
};



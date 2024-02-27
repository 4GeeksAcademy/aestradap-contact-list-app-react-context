
import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Agendas = () => {
        const { store, actions } = useContext(Context);
        const [ newAgenda, setNewAgenda ]  = useState('');
        const [ alertFlag, setAlertFlag ] = useState(false);


        const handlerChangeAgenda = (event) => {
                actions.loadMyContacts(event.target.value);
                actions.setCurrentSlug(event.target.value);
	}
        const handlerSummitAgenda = (event) => {
		if (event.key === "Enter" && store.myContacts.length >= 1){
                        const slug_flag = store.myAgendas.filter((slug) => slug === newAgenda);
                        if(slug_flag.length !== 0){
                                setAlertFlag(true);
                        }
			actions.createContact({
				full_name: "Jhon Doe",
				email: "jhondoe@gmail.com",
				agenda_slug: newAgenda,
				address:"47568 NW 34ST, 33434 FL, USA",
				phone:"7864445566"
			});
			setNewAgenda('');
                        actions.loadMyAgendas();
		}
	}


return <div className="row">
        {
                alertFlag && <div class="alert alert-danger" role="alert">
				A simple danger alert—check it out!
			</div>}
			
			
        <div className="col">
                <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                                Create a new Agenda
                        </span>
                        <input type="text" className="form-control"
                                placeholder="named"
                                onChange={ event => setNewAgenda(event.target.value)}
                                onKeyDown={event => handlerSummitAgenda(event)}
                                value={newAgenda}
                        />
                </div>
        </div>
        <div className="col">
        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                                Agendas
                        </span> <select className="form-select"
                                        onChange={event => handlerChangeAgenda(event)}>
                                {store.myAgendas.map((agenda, index) => (
                                        <option selected 
                                                key={index}
                                                value={agenda}
                                        >{agenda}
                                        </option>
                                ))}
                        </select> 
                </div>
        </div>    
</div> 
};

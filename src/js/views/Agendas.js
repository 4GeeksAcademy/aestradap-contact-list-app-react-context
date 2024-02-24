
import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Agendas = () => {
	const { store, actions } = useContext(Context);

	return <div className="row">
                <div className="col">
                        <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                        Create a new Agenda
                                </span>
                                <input type="text" className="form-control"
                                        placeholder="named"
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1"
                                />
                        </div>
                </div>
                <div className="col">
                <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                        Agendas
                                </span>
                                {/* <select className="form-select" aria-label="Default select example">
                                        <option selected>
                                                agenda selecionada
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                </select> */}
                        </div>
                </div>    
        </div> 
};


import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Agendas = () => {
	const { store, actions } = useContext(Context);

	return <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Create a new Agenda</span>
        <input type="text" class="form-control"
                placeholder="named"
                aria-label="Username" 
                aria-describedby="basic-addon1"
        />
    </div>
};

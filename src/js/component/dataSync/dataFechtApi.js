


const BASE_URL = 'https://playground.4geeks.com/apis/fake/contact/';



//Get All available agendas
export const getDataAgendas = async () => {
    const response = await fetch(`${BASE_URL}agenda`);
    if (response.ok) {
        const data = response.json();
        console.log(data);
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        return {error: {status: response.status, statusText: response.statusText}};
    };
  };
//Get All contacts from an Agenda, 
//If there is no agenda with a given agenda_slug, then a new one is created with it.
export const getDataContactsAgenda = async (agenda_slug) => {
  const response = await fetch(`${BASE_URL}agenda/${agenda_slug}`);
  if (response.ok) {
      const data = response.json();
      console.log(data);
      return data;
  } else {
      console.log('error: ', response.status, response.statusText);
      return {error: {status: response.status, statusText: response.statusText}};
  };
};

 //Get One Particular Contact/apis/fake/contact/{contact_id}
export const getDataContact = async (contact_id) => {
    const response = await fetch(`${BASE_URL}${contact_id}`);
    if (response.ok) {
        const data = response.json();
        console.log(data);
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        return {error: {status: response.status, statusText: response.statusText}};
    };
  };

//Create one contact
export const createDataContact = async ( data ) => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),  
        headers: {
           'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        return {error: {status: response.status, statusText: response.statusText}};
    };
};

//update one contact
export const updateData = async (contact_id) => {
    console.log(JSON.stringify(data))
    const response = await fetch(`${BASE_URL}${contact_id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
           'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        return {error: {status: response.status, statusText: response.statusText}};
    };
};

//Delete All Contacts from an Agenda
export const deleteDataContactsAgenda = async (agenda_slug) => {
    const response = await fetch(`${BASE_URL}agenda${agenda_slug}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        return {error: {status: response.status, statusText: response.statusText}};
    };
};

//Delete One Particular Contact
export const deleteDataContact = async (contact_id) => {
    const response = await fetch(`${BASE_URL}${contact_id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        return {error: {status: response.status, statusText: response.statusText}};
    };
};

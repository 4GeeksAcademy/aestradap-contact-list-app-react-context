import { createDataContact, getDataAgendas, getDataContactsAgenda, deleteDataContact, getDataContact } from "../component/dataSync/dataFechtApi"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			myAgendas: [],
			myContacts: [],
			toEditContact: null,
			agenda_slug:"",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			loadMyAgendas: async (new_slug) => {
					const myAgendas  = await getDataAgendas();
					if(!myAgendas.error){
						setStore({ myAgendas:myAgendas })
						setStore({ agenda_slug:new_slug
							? new_slug
							: myAgendas[myAgendas.length - 1] });

						const myContacts = await getDataContactsAgenda(new_slug 
							? new_slug
							: myAgendas[myAgendas.length - 1]);
							if(!myContacts.error){
								setStore({ myContacts:myContacts })
							} else console.log(myContacts.error);
					} else console.log(myAgendas.error)
			},

			loadMyContacts: async (agenda_slug) => {
				const myContacts = await getDataContactsAgenda(agenda_slug);
							if(!myContacts.error){
								setStore({ myContacts:myContacts })
							} else console.log(myContacts.error);
			},

			createContact: async (contactData) => { 
				const response = await createDataContact(contactData);
				if(!response.error)
				console.log(response);
				const reloadAg = await getDataAgendas();
				if(!reloadAg.error)
					setStore({ myAgendas:reloadAg });
				 else console.log(reloadAg.error);
				 const myContacts = await getDataContactsAgenda(contactData.agenda_slug);
					if(!myContacts.error){
						setStore({ myContacts:myContacts })
					} else console.log(myContacts.error);
			
			},

			getOneContact: async (contact_id) => {
				const toEditContact = await getDataContact(contact_id);
				if(!toEditContact.error)
				setStore({ toEditContact: toEditContact });
				console.log(toEditContact);
			},

			setCurrentSlug: (slug) => {
				setStore({agenda_slug: slug});
			},

			deleteContact: async (id, agenda_slug) => {
				const response = await deleteDataContact(id);
				if(!response.error)
				console.log(response.msg);
				const myContacts = await getDataContactsAgenda(agenda_slug);
				if(!myContacts.error){
					setStore({myContacts:myContacts})
				} else console.log(myContacts.error);
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

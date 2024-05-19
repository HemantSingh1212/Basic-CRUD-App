import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';
const PersonContext = createContext();

export const usePersonContext = () => {
    return useContext(PersonContext);
};

export const PersonProvider = ({children}) => {
    const [people, setPeople] = useState("");
    const [nav_value, set_nav_value] = useState("PeopleList");
    const [peopleId, setPeopleId] = useState("");
    
    // add new pet
    const createNewPeople = async (data) => {
        await http.post("/api/people", data);
    };
    // update a pet entry
    const updatePeople = async (peopleId, data) => {
        await http.put(`/api/people/${peopleId}`, data);
    };
    // delete a pet entry
    const deletePeople = async (peopleId) => {
        await http.delete(`/api/people/${peopleId}`);
    };
    // change navigation value
    const changeNavValue = (value) => {
        set_nav_value(value);
    };
    // get pet id value
    const getPeopleId = (id) => {
        setPeopleId(id);
    };

    useEffect(()=>{
        const readAllPeople = async () => {
            const response = await http.get("/api/people");
            const responseArr = Object.values(response.data.data);
            setPeople(responseArr);
        };
        return readAllPeople;
    }, []);

    const value = {
        createNewPeople,
        people,
        updatePeople,
        deletePeople,
        changeNavValue,
        nav_value,
        getPeopleId,
        peopleId
    };

    // context provider
    return(
        <PersonContext.Provider value={value}>
            {children}
        </PersonContext.Provider>
    )
}; 
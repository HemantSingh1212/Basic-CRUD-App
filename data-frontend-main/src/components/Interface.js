import React from 'react';
    
// custom component
import PersonList from '../components/PersonList';
import CreatePersonEntry from '../components/CreatePersonEntry';
import EditPersonEntry from '../components/EditPersonEntry';

// contexts
import { usePersonContext } from '../contexts/PersonContext';
const Interface = () => {
    const { nav_value } = usePersonContext();
    
    switch (nav_value) {
        case "PersonList":
            return <PersonList/>
        case "AddPerson":
            return <CreatePersonEntry/>
        case "EditPerson":
            return <EditPersonEntry/>
        default:
            return <PersonList/>
    };
};
export default Interface;
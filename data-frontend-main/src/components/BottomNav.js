import * as React from 'react';
    
// core components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// icons
import {
    PeopleOutlined,
    AddCircleOutline,
} from '@mui/icons-material';

// contexts
import { usePersonContext } from '../contexts/PersonContext';

export default function LabelBottomNavigation() {
    const { nav_value, changeNavValue } = usePersonContext();
    const handleChange = (event, newValue) => {
        changeNavValue(newValue);
    };
    return (
        <BottomNavigation showLabels value={nav_value} onChange={handleChange}>
            <BottomNavigationAction
                label="Person"
                value="PersonList"
                icon={<PeopleOutlined />}
            />
            <BottomNavigationAction
                label="Add Person"
                value="AddPerson"
                icon={<AddCircleOutline />}
            />
        </BottomNavigation>
    );
};
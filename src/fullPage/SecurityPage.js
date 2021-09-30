import React, { createContext, useReducer } from 'react';
import PVECanvas from './components/PVECanvas';

function reducer(state, action) {
    switch (action.type) {
        case 'toRoute':
            
        default:
            return state;
    }
}

function SecurityPage() {
    return (
        <div>
            <PVECanvas />
        </div>
    )
}

export default SecurityPage

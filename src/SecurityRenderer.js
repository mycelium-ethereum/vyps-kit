import React, { useReducer } from 'react';

function pullInitialData(initialState) {}

const RendererStatus = {
    LOADING: 'loading',
    READY: 'ready',
    ERROR: 'error'
}

const PageOptions = {
    OVERVIEW: 'overview',
    API: 'api',
    NODE: 'node',
    CONTRACT: 'contract',
    PROTOCOL: 'protocol',    
}

function reducer(state, action) {
    switch (action.type) {
        case 'reload':
            return pullInitialData();
        default:
            return state;
    }
}

const SecurityRenderer = (Component) => {
    const SecurityRendererImpl = ({ contract, chain, page = PageOptions.OVERVIEW, ...props }) => {
        const [state, dispatch] = useReducer(reducer, {
            chain,
            contract,
            page,
            status: RendererStatus.LOADING, 
            data: {},
        }, pullInitialData);
    
        return (
            <Component 
                {...props}
                data={state}
                dispatch={dispatch}
            />
        )
    }

    return SecurityRendererImpl;
}

export default SecurityRenderer;
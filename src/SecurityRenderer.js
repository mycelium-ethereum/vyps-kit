import axios from 'axios';
import React, { useReducer } from 'react';

function pullInitialData(initialState) {}

const RendererStatus = {
    LOADING: 'loading',
    READY: 'ready',
    ERROR: 'error'
}

const fetchSecurityData = () => {
    return process.env.REACT_APP_ENV === 'production' ?
        axios.get() : {
            protocol: {
                name: "Tracer",
                description: "The Tracer protocol is a DAO governed network of open-source financial smart contracts that enables people to manage financial risk. The protocol itself is a low cost vehicle that can be used to unlock new digital and real-world markets.",
                logo: "https://dev.reputation.link/static/media/logo-white.6e2e3d7f.png",
                color: "#f9f9f9",
                cover: "#f9f9f9",
                social: {
                    github: "https://github.com/Tracer-Protocol/",
                    twitter: "https://twitter.com/TracerDAO",
                    discourse: "https://discourse.tracer.finance",
                    discord: "https://discord.gg/kvJEwfvyrW",
                }
            }

        }
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
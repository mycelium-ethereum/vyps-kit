import React, { useState, useMemo } from 'react'

import { FaCross } from 'react-icons/fa';

function Tooltip({ icon: Icon, variant, children, closeable, persistOn }) {
    // Hydrate from localStorage on persistOn key

    const hydratedClose = useMemo(() => {
        return localStorage.getItem(persistOn);
    }, [persistOn])

    const [ closed, setClosed ] = useState(hydratedClose || false)

    return (
        <>
            { !closed &&
                <div className="flex flex-row align-center p-4" >
                    { Icon }
                    { children }
                    { closeable && 
                        <FaCross onClick={() => {
                            if (persistOn)
                                localStorage.setItem(persistOn, true);
                            setClosed(true);
                        }}  />
                    }
                </div>
            }
        </>
    )
}

export default Tooltip

import { motion } from 'framer-motion'
import React, { useState, useMemo } from 'react'



// import SecurityRenderer from "./SecurityRenderer";

// Closed state
function CSecurityWidget({loading}) {
    return (
        <div className="p-4">
            <div>
                {/* Logo */ }
            </div>
            <div>
                <p>
                    Secured by Chainlink
                </p>
                <p>
                    See how &#10095;
                </p>
            </div>
        </div>
    )
}

// Open state
function OSecurityWidget({loading}) {
    return (
        <div className="p-16">
            Test
        </div>
    )
}


function SecurityWidget({left = false, right = false, inset = [20, 20]}) {
    const [isOpen, setIsOpen] = useState(false);

    const position = useMemo(() => {
        if (left && !right) {
            return {
                left: inset[0],
                bottom: inset[1],
            }
        }
        if (!left) { // Default
            return {
                right: inset[0],
                bottom: inset[1],
            }
        }
    }, [left, right, inset])

    return (
        <motion.div style={{
            position: 'fixed',
            ...position
        }} layout>
            {!isOpen && <CSecurityWidget />}
            {isOpen && <OSecurityWidget />}
        </motion.div>
    )
}

export default SecurityWidget;

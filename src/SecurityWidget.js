import { motion } from 'framer-motion'
import React, { useState, useMemo, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { ReactComponent as ReputationLogo } from './ReputationDAO_Logo_VYPS.svg';
import tinycolor from 'tinycolor2';
import './SecurityWidget.css';


// import SecurityRenderer from "./SecurityRenderer";

// Closed state
function CSecurityWidget({color, textColor, url}) {
    const lighterColor = useMemo(() => tinycolor(color).brighten(10).toString(), [color]);
    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef)
    return (
        <motion.a href={url} ref={hoverRef} style={{
            backgroundColor: lighterColor,
            color: textColor,
            borderRadius: '40px',
            fontSize: '12px',
            height: '80px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '10px 10px 24px -10px rgba(0, 0, 0, 0.5)',
            fontFamily: 'Noto Sans, sans-serif',
        }} layout>
            <motion.div style={{
                backgroundColor: color,
                borderRadius: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                height: '80px',
                width: '80px',
            }} layout>
                <ReputationLogo fill={textColor} width='40' />
            </motion.div>
            {isHover && 
                <div style={{padding: '1rem 1rem 1rem 0.5rem'}}>
                    <p>
                        Secured by Chainlink
                    </p>
                    <p>
                        See how &#10095;
                    </p>
                </div>}
        </motion.a>
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

function SecurityWidget({
    left = false,
    right = false,
    inset = [20, 20],
    color = '#3E58C9',
    textColor = "#ffffff",
    url = 'https://reputation.link',
}) {
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
        }}>
            {!isOpen && <CSecurityWidget color={color} textColor={textColor} url={url} />}
            {isOpen && <OSecurityWidget />}
        </motion.div>
    )
}

export default SecurityWidget;

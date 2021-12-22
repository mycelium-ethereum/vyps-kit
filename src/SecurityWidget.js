import { motion } from 'framer-motion'
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useHover } from 'usehooks-ts'
import { ReactComponent as ReputationLogo } from './ReputationDAO_Logo_VYPS.svg';
import tinycolor from 'tinycolor2';
import './SecurityWidget.css';


// import SecurityRenderer from "./SecurityRenderer";

// Closed state
function CSecurityWidget({left, color, textColor, url, style, startOpen}) {
    const lighterColor = useMemo(() => tinycolor(color).brighten(10).toString(), [color]);
    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef)
    const [isOpenTimeout, setIsOpenTimeout] = useState(!startOpen);

    useEffect(() => {
        if (startOpen) {
            setTimeout(() => {
                setIsOpenTimeout(true);
            }, 600)
        }
    }, [startOpen])

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
            textDecoration: 'none',
            ...style
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
            {(!isOpenTimeout || isHover) && 
                <motion.div 
                style={{
                    textAlign: 'left',
                    padding: '1rem 1rem 1rem 0.5rem',
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                }}>
                    <p>
                        Secured by Chainlink
                    </p>
                    <p>
                        See how &#10095;
                    </p>
                </motion.div>}
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
    startOpen = false,
}) {
    // eslint-disable-next-line no-unused-vars
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
            {!isOpen && <CSecurityWidget left={left} color={color} textColor={textColor} url={url} startOpen={startOpen} />}
            {isOpen && <OSecurityWidget />}
        </motion.div>
    )
}

export default SecurityWidget;

import { motion } from 'framer-motion'
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { useHover } from 'usehooks-ts'
import { ReactComponent as ReputationLogo } from './ReputationDAO_Logo_VYPS.svg';
import tinycolor from 'tinycolor2';
import { isEqual, every } from 'lodash';
import './SecurityWidget.css';

// import SecurityRenderer from "./SecurityRenderer";

const variants = {
    "sm": 40,
    "md": 60,
    "lg": 80,
}

const WidgetPortal = (props) => {
    const elem = document.createElement('div');
    elem.className = 'SecurityWidget--portal';

    useEffect(() => {
        document.body.appendChild(elem);
        return () => {
            document.body.removeChild(elem);
        };
    }, [elem]);

    return createPortal(<SecurityWidget {...props} />, elem);
};

// Closed state
function CSecurityWidget({color, textColor, url, style, startOpen, noAnimate, variant, as, meta={}, protocol, network}) {
    const lighterColor = useMemo(() => tinycolor(color).brighten(10).toString(), [color]);
    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef)
    const [isOpenTimeout, setIsOpenTimeout] = useState(!startOpen);

    const generateURLParams = (metadata = {}) => Object.entries(metadata).reduce((acc, curr) => {
            return acc + `&${curr[0]}=${curr[1]}`;
    }, '');

    useEffect(() => {
        if (!isOpenTimeout) {
            setTimeout(() => {
                setIsOpenTimeout(true);
            }, 600)
        }
    }, [isOpenTimeout])

    const Component = as === 'a' ? motion.a : motion.div;

    return (
        <Component href={url} ref={hoverRef} style={{
            backgroundColor: lighterColor,
            color: textColor,
            borderRadius: '40px',
            fontSize: '12px',
            height: variants[variant],
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '10px 10px 24px -10px rgba(0, 0, 0, 0.5)',
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: "300",
            textDecoration: 'none',
            cursor: 'pointer',
            ...style
        }}
        onClick={(e) => {
            e.preventDefault();
            window.open(`${url}/protocols/${protocol}?network=${network}${generateURLParams(meta)}`, '_blank', 'noopener,noreferrer');
        }}
        initial={{
            borderRadius: variants[variant] / 2,
            height: variants[variant],
        }}
        layout={!noAnimate} >
            <motion.div style={{
                backgroundColor: color,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
            }} 
            initial={{
                borderRadius: variants[variant] / 2,
                height: variants[variant],
                width: variants[variant],
            }}
            layout={!noAnimate}>
                <ReputationLogo fill={textColor} width={variants[variant] / 2} />
            </motion.div>
            {(!isOpenTimeout || isHover) && 
                <motion.div 
                style={{
                    textAlign: 'left',
                    padding: '1rem 1rem 1rem 0.5rem',
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    lineHeight: variant === 'sm' ? '1.15' : undefined,
                }}>
                    <p>
                        Secured by Chainlink
                    </p>
                    <p>
                        See how &#10095;
                    </p>
                </motion.div>}
        </Component>
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

export const AvailableNetworks = {
    "Ethereum": "Eth_Mainnet",
    "Polygon": "Polygon",
    "Arbitrum": "Arbitrum",
    "BinanceSmartChain": "BSC",
}

/**
 * @typedef {"Eth_Mainnet" | "Polygon" |  "Arbitrum" | "BSC"} AvailableNetworks 
 */

/** @typedef {{ left?: boolean; right?: boolean; inset?: number[]; color?: string; textColor?: string; url?: string; startOpen?: boolean; style?: React.CSSProperties; noAnimate?: boolean, variant?: "sm" | "md" | "lg", as?: "a" | "div"; protocol?: string; meta?: any, network?: AvailableNetworks }} SecurityWidgetProps */
/** @param {SecurityWidgetProps} props */
function SecurityWidget(props) {
    const safeProps = {
        left: false,
        right: false,
        inset: [20, 20],
        color: '#3E58C9',
        textColor: "#ffffff",
        network: 'Eth_Mainnet',
        protocol: '',
        url: 'https://reputation.link',
        meta: {},
        startOpen: false,
        noAnimate: false,
        variant: 'md',
        as: 'a',
        ...props,
    }

    const { left, right, inset, style } = safeProps;
        

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
            ...position,
            ...style
        }}
        initial={{
            opacity: 0,
            scale: 0.8
        }}
        animate={{
            opacity: 1,
            scale: 1
        }}
        exit={{
            opacity: 0,
            scale: 0.8
        }}
        key={"security-widget"}
        >
            {!isOpen && <CSecurityWidget 
                {...safeProps}
            />}
            {isOpen && <OSecurityWidget />}
        </motion.div>
    )
}

export default React.memo(WidgetPortal, (old, newProps) => {
    return every(Object.entries(old), ([key, value]) => {
        return isEqual(newProps[key], value);
    });
});
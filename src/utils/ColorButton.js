import React, { useState } from 'react'

import { ChromePicker } from 'react-color'
import OutsideClickHandler from 'react-outside-click-handler';

function ColorButton({ Component = ChromePicker, onChange, color }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isBlur, setBlur] = useState(false);

    return (
            <div className="relative">
            <div 
                tabIndex={0}
                className="flex flex-row rounded w-40 h-10 m-2 text-sm bg-gray-300 hover:bg-gray-200 focus:bg-gray-200"
                onClick={(e) => { if (!isBlur) setIsOpen(!isOpen); setBlur(false); }}
            >
                <div className="w-1/4 rounded" style={{backgroundColor: color.hex}}>

                </div>
                <div className="w-3/4 text-center self-center">
                    {color.hex}
                </div>
            </div>
            {isOpen && 
                <OutsideClickHandler onOutsideClick={(e) => {setBlur(true); setIsOpen(false);}}>
                <div style={{
                    position: "absolute", zIndex: "2", bottom: "-20",
                }}>
                <Component
                    color={color} 
                    onChange={onChange}
                    disableAlpha
                />
                </div>
                </OutsideClickHandler>
                
            }
            </div>
    )
}

export default ColorButton

import React, { useState, useMemo, useEffect } from 'react'
import Prism from 'prismjs';
import CodeRenderer from './utils/CodeRenderer';
import ColorButton from './utils/ColorButton';

/**
 * @component SecurityWidgetConfigurator
 * @description A widget configurator for the SecurityWidget component
 */

const commonFormStyles = {
    input: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    head: "block uppercase text-gray-700 text-md font-bold mb-2 w-full",
};

function generateUsageString(widgetConf) {
return (
`// JSX version - Plain JS support soon!
<SecurityWidget
    ${widgetConf.left ? 'left' : 'right'}
    variant="${widgetConf.variant}"
    color={"${widgetConf.color.hex}"}
    textColor={"${widgetConf.textColor.hex}"}
    url="${widgetConf.url}"
/>`
)}

function SecurityWidgetConfigurator({onChange}) {
    
    const [widgetConf, setWidgetConf] = useState({
        left: false,
        variant: "system",
        color: { hex: "#00ccff" },
        textColor: { hex: "#ffffff" },
        url: "https://reputation.link"
    })

    const updateMutualState = (widgetConf) => {
        onChange(widgetConf);
        setWidgetConf(widgetConf);
    }

    useEffect(() => {
        Prism.highlightAll();
    }, [widgetConf]);


    return <div className="rounded shadow-lg bg-blue-50 p-4">
        <div className="flex flex-wrap">
            <span className={commonFormStyles.head}>Customize your widget</span>
            <div className="w-1/2 px-3 mb-6">
                <label className={commonFormStyles.label}>
                    Position
                </label>
                <select 
                    value={widgetConf.left ? 'left' : 'right'} 
                    className={commonFormStyles.input} 
                    id="swc--position"
                    onChange={({target: {value}}) => {updateMutualState({...widgetConf, left: value === 'left'})}}
                >
                    <option value="left">Left</option>
                    <option value="right">Right (Default)</option>
                </select>
            </div>
            <div className="w-1/2 px-3 mb-6">
                <label className={commonFormStyles.label}>
                    Expanded Theme Variant
                </label>
                <select 
                    value={widgetConf.variant} 
                    id="swc--variant"
                    className={commonFormStyles.input} 
                    onChange={({target: {value}}) => {updateMutualState({...widgetConf, variant: value})}}
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                </select>
            </div>
            <div className="w-full px-3">
            <label className={commonFormStyles.label}>
                Colors
            </label>
            </div>
            <div className="w-1/2 px-3 mb-1">
                <label className={commonFormStyles.label}>
                    Background
                </label>
                <ColorButton 
                    color={widgetConf.color} 
                    onChange={color => {updateMutualState({...widgetConf, color})}}
                />
            </div>
            <div className="w-1/2 px-3 mb-1">
                <label className={commonFormStyles.label}>
                    Text
                </label>
                <ColorButton 
                    color={widgetConf.textColor} 
                    onChange={color => {updateMutualState({...widgetConf, textColor: color})}}
                />
            </div>
            <div className="w-full px-3 mb-1">
                <label className={commonFormStyles.label}>
                    URL
                </label>
                <input
                    value={widgetConf.url}
                    className={commonFormStyles.input} 
                    onChange={e => {updateMutualState({...widgetConf, url: e.target.value})}}
                />
            </div>
            <div className="w-full">
                <CodeRenderer code={generateUsageString(widgetConf)} language="jsx" />
            </div>
        </div>
    </div>
}

export default SecurityWidgetConfigurator;
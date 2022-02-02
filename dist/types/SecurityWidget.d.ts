export type AvailableNetworks = "Eth_Mainnet" | "Polygon" | "Arbitrum" | "BSC";
export namespace AvailableNetworks {
    const Ethereum: string;
    const Polygon: string;
    const Arbitrum: string;
    const BinanceSmartChain: string;
}
declare var _default: any;
export default _default;
export type SecurityWidgetProps = {
    left?: boolean;
    right?: boolean;
    inset?: number[];
    color?: string;
    textColor?: string;
    url?: string;
    startOpen?: boolean;
    style?: React.CSSProperties;
    noAnimate?: boolean;
    variant?: "sm" | "md" | "lg";
    as?: "a" | "div";
    protocol?: string;
    meta?: any;
    network?: AvailableNetworks;
};

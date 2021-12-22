declare module "SecurityWidget" {
    export default SecurityWidget;
    function SecurityWidget({ left, right, inset, color, textColor, url, startOpen, }: {
        left?: boolean;
        right?: boolean;
        inset?: number[];
        color?: string;
        textColor?: string;
        url?: string;
        startOpen?: boolean;
    }): any;
}
declare module "manifest" {
    export { SecurityWidget };
    import SecurityWidget from "SecurityWidget";
}

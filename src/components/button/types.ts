export interface IButton {

    value: string;
    type: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
}
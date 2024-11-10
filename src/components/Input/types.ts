import { Control } from "react-hook-form";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {

    control: Control<any, any>
    name: string;
    errorMessage?: string;

}
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "toggle";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
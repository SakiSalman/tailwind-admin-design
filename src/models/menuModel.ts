import { ReactElement } from "react";

export interface MenuItemInterface
{
    id: string | number;
    name: string;
    path?:string;
    item?:SubMenuItem[]
    icon:ReactElement
}

export interface SubMenuItem
{
    id: string | number;
    name: string;
    path:string;

}


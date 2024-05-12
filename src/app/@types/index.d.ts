import {FC, ReactNode} from "react";

export type EntityProvider = FC<{
    children: ReactNode;
}>;

export type WithChildren<T = unknown> = T & {
    children: ReactNode;
};
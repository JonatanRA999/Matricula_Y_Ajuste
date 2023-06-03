import { createContext, useContext } from "react";

export const IdUser = createContext("");

export const idUsuario = () =>
{
    return useContext(IdUser);
}
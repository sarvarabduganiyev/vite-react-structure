import {EntityProvider} from "../../@types";
import {Navigate} from "react-router-dom";

export const AuthProvider:EntityProvider = ({ children }) => {
    const authenticated = true;
    return !authenticated ? <>{children}</> : <Navigate to={"/"} />;
};
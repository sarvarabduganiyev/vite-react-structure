import {WithChildren} from "../@types";
import {Navigate} from "react-router-dom";

export function AuthGuard(props: WithChildren) {
  const   authenticated = true;
    return authenticated ? props.children : <Navigate to="/auth" />;
}
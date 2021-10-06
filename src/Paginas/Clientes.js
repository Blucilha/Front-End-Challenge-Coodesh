import React, { useContext } from "react";
import contextApi from "../ContextAPI/ContextApi";

function Clientes() {
    const { clientRandom } = useContext(contextApi);
    return(
        <h1>{ `Sou o número: 1` }</h1>
    )
}

export default Clientes;

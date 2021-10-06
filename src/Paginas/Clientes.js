import React, { useContext, useEffect, useState } from "react";
import TableClients from "../Components/TableClients";
import contextApi from "../ContextAPI/ContextApi";

function Clientes() {
    const { clientRandom } = useContext(contextApi);
    const [clients, setClients] = useState();

    useEffect(() => {
        const stateClients = async () => {
            const clientRandomArray = await clientRandom;
            setClients(clientRandomArray)
        };

        stateClients();
    }, [clientRandom]);

    return(
        <TableClients client={clients} />
    )
}

export default Clientes;

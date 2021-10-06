import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { CLIENT_DEFAULT } from './constantes';
import ModalClient from './ModalClient';

function TableClients({ client }) {
    const [modalShow, setModalShow] = useState(false);
    const [curClient, setCurClient] = useState(CLIENT_DEFAULT);

    return (
        <div>
            <Table variant='dark' striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { client && client.map((client, index) => {
                        const { name, gender, dob } = client;
                        const dateBirth = new Date(dob.date);
                        const formatDate = `${ dateBirth.getDate() }-${dateBirth.getMonth()}-${dateBirth.getFullYear()}`;

                        return (
                            <tr key={ index }>
                                <td>{ `${ name.first } ${ name.last }` }</td>
                                <td>{ gender }</td>
                                <td>{ formatDate }</td>
                                <td>
                                    <button
                                        type='button'
                                        onClick={ () => {
                                            setModalShow(true);
                                            setCurClient(client);
                                        } }
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </Table>
            <ModalClient
                show={ modalShow }
                onHide={ () => setModalShow(false) }
                client={ curClient }
            />
        </div>
    )
}

export default TableClients;

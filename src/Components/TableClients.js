import React from 'react';
import { Table } from 'react-bootstrap';

function TableClients({ client }) {
    return (
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
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    )
                }) }
            </tbody>
        </Table>
    )
}

export default TableClients;

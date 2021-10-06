import React from 'react';
import { Modal } from 'react-bootstrap'

function ModalClient(props){
    const { client } = props;
    const dateBirth = new Date(client.dob.date);
    const formatDate = `${ dateBirth.getDate() }-${dateBirth.getMonth()}-${dateBirth.getFullYear()}`;

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <img src={ client.picture.large } alt={ client.name.first } />
                        <h2>{ client.login.uuid }</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>{ `${ client.name.title }. ${ client.name.first } ${ client.name.last }` }</h3>
                    <article>
                        <fieldset>
                            <legend><strong>Dados:</strong></legend>
                            <p>Email: { client.email }</p>
                            <p>Gênero: { client.gender }</p>
                            <p>Data de Nascimento: { formatDate }</p>
                            <p>Telefone: { client.phone }</p>
                            <p>Nacionalidade: { client.nat }</p>
                            <p>Endereço: {client.location.street.name}</p>
                        </fieldset>
                    </article>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type='button'
                        onClick={props.onHide}
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalClient;

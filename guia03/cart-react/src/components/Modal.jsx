import { React } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';

export default ({ show, title, descripcion, img, handleClose }) => {
    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <ModalHeader closeButton>
                <ModalTitle> {title} </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <figure>
                    <img src={img} alt={title} height={100} width={100}/>
                </figure>
                {descripcion}
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    );
}

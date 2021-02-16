import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';


export default function MessageModal({props}) {
    const [modalShow, setModalShow] = useState(true);

    function handleClose() {
        setTimeout(setModalShow(false), 2000);
    }
    return (
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{props.message}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={()=>handleClose()} variant="light">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
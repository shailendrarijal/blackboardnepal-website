import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';


export default function SignUpModal() {
    const [modalShow, setModalShow] = useState(true);

    return (
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title>Sign Up to Blackboard Nepal</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Sign Up to Blackboard Nepal to access all the awesome materials. No payment required.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button href={'/signup'} variant="success">
                    <a>Sign Up</a>
                </Button>
                 <Button href={'/signin'} variant="secondary">
                    <a>Sign In</a>
                </Button>
                <div>
                <Button onClick={()=>setModalShow(false)} variant="light">No Thanks</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}
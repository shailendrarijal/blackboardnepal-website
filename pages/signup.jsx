import {useAuth} from '.././utils/auth';
import { useRouter } from 'next/router';
import  Link  from 'next/link';
import { Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


export default function SignUp() {
    const auth = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    // const [username, setUserName] = useState('');
    const [error, setError] = useState();

    const [modalShow, setModalShow] = useState(true);

    const signUp = () => {

        auth.signup(email, pass)
            .then(() => {
                router.push('/signin');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="card signup text-left col-lg-6 col-md-8 col-sm-12 mx-auto my-5">
             

            <Card className="py-0 px-0 b-0">
                <Card.Header>
                    <h3>Sign Up</h3>
                </Card.Header>
                <Card.Body>
                    {/* <Form.Group controlId="userNameSignUp">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} onInput={(e) => setUserName(e.target.value) }
                            autoComplete="off" required />
                    </Form.Group> */}
                    <Form.Group controlId="emailSignUp">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onInput={(e) => setEmail(e.target.value) }
                            autoComplete="off" required />
                    </Form.Group>
                    <Form.Group controlId="passwordSignUp">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={pass} onInput={(e) => setPass(e.target.value)} 
                            required />
                        <Form.Text id="passwordHelpBlock" muted>
                            Must be 8-20 characters long.
                        </Form.Text>
                    </Form.Group>
                </Card.Body>
                <Card.Footer>
                    <Button type="submit" className="w-100 mb-3" onClick={()=>signUp()}>
                        Sign Up
                    </Button>
                    <Link href="/signin">Already registered? Sign In</Link>
                </Card.Footer>
                
            </Card>
            {error && (
                <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title>Error has occurred</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Text className="text-danger">{error}</Form.Text>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={()=>setModalShow(false)}>Close</Button>
                </Modal.Footer>
                </Modal>
            )}
           
            <style jsx>{`
                .error-message{
                    color: #dc143c;
                    }
                .card{
                    margin: 3rem auto;
                    box-shadow: 1rem 1rem #ccc;
                }

                .button{
                    padding: 0.5rem;
                    box-shadow: 0.1rem 0.1rem #ccc;
                    border-radius: 10px;
                }
            
            `}</style>
            </div>
    );

}
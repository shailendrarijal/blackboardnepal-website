import {useAuth} from '.././utils/auth';
import { useRouter } from 'next/router';
import  Link  from 'next/link';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


export default function SignIn() {
    const auth = useAuth();
  const router = useRouter();

     const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
  const [modalShow, setModalShow] = useState(true);
  // const [showVerifyButton, setShowVerifyButton] = useState(false);

  const signIn = () => {

    auth.signin(email, pass)
      .then((response) => {  
                  router.push('/home');
        // if (response === false) {
        //   setError("Please verify your email address by going to your email");
        //   setModalShow(true);
        //   return;
        // } else {
        // }
          })
          .catch((error) => {
              setError(error.message);
          });
  };

  // const reset = () => {
  //   setEmail('');
  //   setPass('');
  // }
  

    return (
      <div className="card signup text-left col-lg-6 col-md-8 col-sm-12 mx-auto my-5">
        <Card className="py-0 px-0 b-0">
           <Card.Header>
              <h3>Sign In</h3>
          </Card.Header>

          <Card.Body>
            <Form.Group controlId="emailSignUp">
              <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required/>
            </Form.Group>
            <Form.Group controlId="passwordSignUp">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={ pass} onChange={ (e)=>setPass(e.target.value)} required/>
              <Form.Text id="passwordHelpBlock" muted>
              </Form.Text>
            </Form.Group>
          </Card.Body>

          <Card.Footer>
            <Button type="submit" className="w-100 mb-3" onClick={()=>signIn()}>
              Sign In
            </Button>
            <Link href="/reset">Forgot Password?</Link>
            <span>&nbsp;|&nbsp;</span>
            <Link href="/signup">Register</Link>
            {/* <Button onClick={()=>auth.verifyEmail()}>Verify Email?</Button> */}
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
              {/* {showVerifyButton && (
                <Button onClick={()=>auth.verifyEmail(email)}>Send verification email</Button>
              )} */}
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
        `}
        </style>
      </div>
    );

}
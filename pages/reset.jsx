import {useAuth} from '.././utils/auth';
import { useRouter } from 'next/router';
import  Link  from 'next/link';
import { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import queryString from 'query-string';



export default function Reset() {
    const auth = useAuth();
    const router = useRouter();

     const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [error, setError] = useState('');

    const [emailEntered, setEmailEntered] = useState(false);

    useEffect(() => {
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        setResetCode(urlParams.get('oobCode'));
        
        if (!url.contains('oobCode')) return;
        const code = getFromQueryString('oobCode');
        setResetCode(code);
        setEmailEntered(true);
    },[])

    const getFromQueryString = (key) => {
    return queryString.parse(window.location.search)[key];
    }
    
  const sendResetEmail = () => {
    
        auth.sendPasswordResetEmail(email)
            .then(() => {
                setEmailEntered(true);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const ResetPassword = () => {
        auth.confirmPasswordReset(resetCode, pass)
            .then(() => {
                // alert("Password changed");
                router.push('/signin');
            })
            .catch((error) => {
                setError(error.message);
        })
    }

    return (
      <div className="card signup text-left col-lg-6 col-md-8 col-sm-12 mx-auto my-5">
        <Card className="py-0 px-0 b-0">
           <Card.Header>
              <h3>Reset Password</h3>
          </Card.Header>

          <Card.Body>
                    {emailEntered ?
                        <div>
                            <Form.Group controlId="resetCode">
                                <Form.Label>Password Reset Code</Form.Label>
                                <Form.Control type="email" placeholder="Enter reset code" value={resetCode} onChange={(e) => setResetCode(e.target.value)} autoComplete="off" required/>
                            </Form.Group>
                            <Form.Group controlId="newPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter new password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="off" required/>
                                <Form.Text id="passwordHelpBlock" muted></Form.Text>
                            </Form.Group>
                        </div>
                        :
                        <Form.Group controlId="emailReset">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" value={ email} onChange={ (e)=>setEmail(e.target.value)} required/>
                        </Form.Group>
                    }
          </Card.Body>

          <Card.Footer>
                {emailEntered ?
                    <Button type="submit" className="w-100 mb-3" onClick={()=>ResetPassword()}>
                        Reset Password
                    </Button>
                    :
                    <Button type="submit" className="w-100 mb-3" onClick={()=>sendResetEmail()}>
                        Send reset code
                    </Button>
                    }
            
            <Link href="/signin">Cancel</Link>
            <Form.Text>{error}</Form.Text>
          </Card.Footer>
        </Card>

        <style jsx>{`
          .card{
            margin: 3rem auto;
            box-shadow: 1rem 1rem #ccc;
          }
        `}
        </style>
      </div>
    );

}
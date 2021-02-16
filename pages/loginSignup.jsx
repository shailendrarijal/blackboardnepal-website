import Head from 'next/head'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function LoginSignup() {
    return (
      <div>
        <Head>
          <title>Login/SignUp | Blackboard Nepal</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="SignUp or login to Blackboard Nepal"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <div className="container">
          <p>Please login if you have already registered with us. If this is your first time, please register for free!</p>
          <div className="row">
            <div className="card login text-left col-lg-4 col-md-3 col-sm-12 mx-auto">
              <h3>Login</h3>

              <Form className="px-4">
                <Form.Group controlId="emailLogin">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="passwordLogin">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  
                </Form.Group>
                <Button type="submit" className="mb-2">
                  Login
                </Button>
                
              </Form>
              <a href="/resetPassword">Forgot Password?</a>
              
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 m-auto text-white">
              <h4>Sign in/up with:</h4>
              <div className="col-lg-1 col-md-1 col-sm-12 mx-auto text-white">
                <div className="m-3 facebook social-media-buttons rounded-circle text-center">
                        f
                    </div>
                    <div className="m-3 linkedIn social-media-buttons rounded-circle text-center">
                        in
                    </div>
                    
                    <div className="m-3 google social-media-buttons rounded-circle text-center">
                        g
                    </div>
              </div>
            </div>
            <div className="card signup text-left col-lg-4 col-md-3 col-sm-12 mx-auto">
              <h3>Signup</h3>

              <Form className="px-4">
                <Form.Group controlId="fullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter fullname" />
                </Form.Group>
                <Form.Group controlId="emailSignUp">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="passwordSignUp">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Text id="passwordHelpBlock" muted>
                    Must be 8-20 characters long.
                  </Form.Text>
                </Form.Group>
                <Button type="submit" className="mb-2">
                  Sign up
                </Button>
              </Form>
            </div>
          </div>
        </div>
         
  
        <style jsx>{`
            .button{
              width: 80%;
              border-radius: 
              margin: 2rem auto;
            }
            .container{
                padding: 3rem 1rem;
            }

            .card{
              padding: 0.5rem 1rem;
              border: none;
              background: linear-gradient(45deg, #ccc, #efefef);
            }
        `}</style>
  
  
      </div>
  
    )
  }
  
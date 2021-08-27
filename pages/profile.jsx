import { useState, useEffect } from 'react';

import { Card,Form, Button } from 'react-bootstrap';
import MessageModal from '../components/Modals/MessageModal';

import { useAuth } from '.././utils/auth';
import { useUser } from '../utils/users';

export default function Profile() {
    const auth = useAuth();

    const user = useUser();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    const [isContributor, setIsContributor] = useState(false);
    const [isEditable, setIsEditable] = useState(false);

    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);
    const [showPasswordResetText, setShowPasswordResetText] = useState(false);

    const [profileInfo, setProfileInfo] = useState({
        username: '',
        country: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        workPlace: '',
        email: '',
    });

    const [email, setEmail] = useState('');


      useEffect(() => {
        if (!auth.userId) return;
        if (auth.userId) {
            setIsLoggedIn(true);
        }
      }, [auth]);
    
    useEffect(() => {
        if (email !== '') return;
        const userData = user.getUserData();
        setProfileInfo(userData.profileInfo);
        setIsContributor(userData.isContributor);
        setEmail(userData.profileInfo.email);
    }, [user]);
    
    function onInputChange(e) {
        const { target: { name, value } } = e
        setProfileInfo({...profileInfo, [name]: value});
        setSaveButtonEnabled(true);
    };
    
    function onSave() {
        if (profileInfo.firstName === '') {
            <MessageModal
                title="Missing Info"
                message="Please enter your first name" />
            return
        }
        if (profileInfo.lastName === '') {
            alert("Missing lastname");
            return
        }
         if (profileInfo.username === '') {
            alert("Missing username");
            return
        }
         if (profileInfo.country === '') {
            alert("Missing country");
            return
        }
         if (isContributor && profileInfo.jobTitle === '') {
            alert("Missing job title");
            return
        }
        if (isContributor && profileInfo.workPlace === '') {
            alert("Missing work place");
            return
        }
        user.updateUserData(profileInfo);
        user.getUserData();
        setIsEditable(false);
        setSaveButtonEnabled(false);
    }

    function onCancelClick() {
        setIsEditable(false);
        setSaveButtonEnabled(false);
        user.getUserData();
    }

    const handleChangePassword = () => {
        setTimeout(setShowPasswordResetText(true), 10000);
        auth.sendPasswordResetEmail();
    }

    
    return (
        <div>
            {isLoggedIn ?
                <div className="signup text-left col-lg-8 col-md-8 col-sm-12 mx-auto my-5">
                    <Card className="py-0 px-0 b-0">
                    <Card.Header>
                        <h3>User Info <Button variant="warning" className="float-right" onClick={()=>setIsEditable(true)}>Edit?</Button></h3>
                    </Card.Header>

                    <Card.Body>
                        
                        <Form.Group controlId="FirstName">
                            <Form.Label>Given Name</Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="Enter given names" disabled={!isEditable} value={ profileInfo.firstName} onChange={onInputChange}/>
                        </Form.Group>
                        <Form.Group controlId="LastName">
                            <Form.Label>Family Name</Form.Label>
                            <Form.Control type="text" name="lastName" placeholder="Enter family name" disabled={!isEditable} value={ profileInfo.lastName} onChange={onInputChange}/>
                        </Form.Group>
                        <Form.Group controlId="userName">
                        <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Enter username" disabled={!isEditable} value={ profileInfo.username} onChange={onInputChange}/>
                        </Form.Group>
                            <Form.Group controlId="userEmail" >
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="text" disabled value={ profileInfo.email}/>
                        </Form.Group>
                        <Form.Group controlId="userCountry">
                            <Form.Label>Country of residence</Form.Label>
                            <Form.Control type="text" name="country" placeholder="Enter country" disabled={!isEditable } value={ profileInfo.country} onChange={onInputChange}/>
                        </Form.Group>

                        <Button type='button' variant="warning" onClick={()=>handleChangePassword()}>
                            Change Password
                        </Button><br />
                        {showPasswordResetText && (
                            <Form.Text>We have sent you an email with password reset link. Please follow that link to reset your password</Form.Text>
                        )}
                        
                        {isContributor &&
                            <div>
                                <Form.Group controlId="JobTitle">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control type="text" name="jobTitle" placeholder="Enter Job Title" disabled={!isEditable} value={ profileInfo.jobTitle} onChange={onInputChange}/>
                                </Form.Group>
                                <Form.Group controlId="workPlace">
                                    <Form.Label>WorkPlace Name</Form.Label>
                                    <Form.Control type="text" name="workPlace" placeholder="Enter name of your workplace" disabled={!isEditable} value={ profileInfo.workPlace} onChange={onInputChange}/>
                                </Form.Group>
                            </div>
                                }
                        <Form.Text>Please read our Privacy Policy and Terms and Conditions to understand our data handling system</Form.Text>
                    </Card.Body>

                    <Card.Footer>
                            <Button variant="success" type="submit" className="my-2" onClick={() => onSave()} disabled={!saveButtonEnabled}>
                                Save
                        </Button>
                            <span>&nbsp;&nbsp;</span>
                            <Button variant="secondary" type="submit" className="my-2" onClick={() => onCancelClick()}>Cancel</Button>

                    </Card.Footer>
                    </Card>
            </div>
        :
                <p>You are not logged in. Please log in</p>
            }
        </div>
        
    );
}
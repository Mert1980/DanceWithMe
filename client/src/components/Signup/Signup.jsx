import React, { useState } from 'react';
import { Modal, Button, Form, } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router';
import useInput from "./use-input";


function SignUp() {
  const [show, setShow] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const name = useInput('');
  const surname = useInput('');
  const email = useInput('');
  const password = useInput('');
  const gender = useInput('');
  const age = useInput('');
  const weight = useInput('');
  const height = useInput('');
  const location = useInput('');
  const dance_preference = useInput('');
  const partner_gender = useInput('');
  const partner_age = useInput('');
  const partner_weight = useInput('');
  const partner_height = useInput('');
  const preferred_dance_type = useInput('');
  const more_about_you = useInput('');

    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitForm() {
     axios
       .post('http://localhost:5000/api/users', {name:name.value, surname:surname.value, email:email.value, password: password.value, gender:gender.value, age:age.value, weight:weight.value, height:height.value, location:location.value, dance_preference:dance_preference.value, partner_gender:partner_gender.value, partner_age:partner_age.value, partner_weight:partner_weight.value, partner_height:partner_height.value, preferred_dance_type:preferred_dance_type.value, more_about_you:more_about_you.value })
       .then(e => {
         if (e.data.token) {
           localStorage.setItem('token', e.data.token);
           localStorage.setItem('ID', e.data.user._id);
           setSignedUp(true);
        } else {
           setSignedUp(false);
         }
       })
       .catch(err => {
         console.log(err);
       });
   }
  return (
    <div>
      {signedUp ? (
        //we need frontend route here
        <Redirect to="/login" />
      ) : (<div>
        <Button variant="outline-primary" onClick={handleShow}>
          Sign Up
      </Button>
        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Header closeButton > Sign Up </Modal.Header> */}
            
          <Modal.Body>

            <form onSubmit={e => {e.preventDefault();
            submitForm()}}
            action="/newaccount" method= 'post' className="was-validated" 
                oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'>
                <div className="form-group mt-4">
                    <h6>What is your first name?*</h6>
                    <input type="text" class="form-control " id="fname" placeholder="Enter first name" name="fname"
                        required {...name}></input>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group mt-4">
                    <h6>What is your last name?*</h6>
                    <input type="text" className="form-control  " id="lname" placeholder="Enter last name" name="lname"
                        required {...surname}/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>

                </div>
                <div className="form-group mt-4">
                    <h6>What is your email address?*</h6>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required {...email}/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group mt-4">

                    <h6>Create a password*</h6>
                    <input id="password1" className="form-control  " type='password' required {...password} name='up' placeholder="Password"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback mb-4">Please fill out this field.</div>

                    {/* <h6>Confirm password*</h6>
                    <input id="password2" className="form-control   " type='password' required name='up2'
                        placeholder="Confirm Password"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div> */}

                </div>
                <div className="row">
                    <div className="col-sm-6 my-2"> <select name="cities" className="custom-select">
                            <option selected>Select Your Province</option>
                            <option value="Antwerpen">Antwerpen</option>
                            <option value="Limburg">Limburg</option>
                            <option value="Oost-Vlaanderen">Oost-Vlaanderen</option>
                            <option value="Vlaams-Brabant">Vlaams-Brabant</option>
                            <option value="West-Vlaanderen">West-Vlaanderen</option>
                            <option value="Henegouwen">Henegouwen</option>
                            <option value="Luik">Luik</option>
                            <option value="Luxemburg">Luxemburg</option>
                            <option value="Namen">Namen</option>
                            <option value="Waals-Brabant">Waals-Brabant</option>
                        </select></div>
                    <div className="col-sm-6 my-2"><select name="years" className="custom-select">
                            <option selected>Select Years Experience</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="More">More</option>

                        </select></div>
                </div>
                <h6 className="mt-4">More about you</h6>
                <div className="form-group">
                    <textarea className="form-control  " rows="3"
                        placeholder="Dance interest, dance background and goals..." {...more_about_you}></textarea>
                </div>
                
                {/* <div className="container">
            <div className="progress">
                <div className="progress-bar" style={{width:'50%'}}>%50 Completed</div>
            </div>
            </div> */}

            <div className="container">
        <h5 className="text-success mt-5">Physical Information</h5>
        <hr />
        <div className="container border border-top-0 border-info px-5 py-2">
            <h6 className="mt-4">Gender</h6>

            <div className="custom-control custom-radio custom-control-inline w-25">
                <input type="radio" className="custom-control-input" id="customRadio" name="example" {...gender}/>
                <label className="custom-control-label" for="customRadio">Male</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline w-25">
                <input type="radio" className="custom-control-input" id="customRadio2" name="example" {...gender}/>
                <label className="custom-control-label" for="customRadio2">Female</label>
            </div>

            <div className="row mt-3 py-4">
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="number" id="age" name="age" min="18" max="55" placeholder="age"
                            className="form-control" required {...age}/>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="number" id="height" name="height" min="160" max="200"
                            placeholder="height(cm)" className="form-control" required {...height}/>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="number" id="weight" name="weight" min="50" max="115"
                            placeholder="weight(kg)" className="form-control" required {...weight}/>
                    </div>
                </div>
                </div>
                </div>

                {/* <div className="container">
            <div className="progress">
                <div className="progress-bar" style={{width:'70%'}}>%70 Completed</div>
            </div>
          </div> */}

                </div>
       <div className="container">
                <h5 className="text-success mt-5">Your ideal dance partner</h5>
                <hr />
          <div className="container border border-top-0 border-info px-5 py-2">
            <h6 className="mt-4">Are you looking for a man or woman?</h6>

            <div class="custom-control custom-radio custom-control-inline w-25">
                <input type="radio" className="custom-control-input" id="customRadio3" name="example2" {...partner_gender}/>
                <label className="custom-control-label" for="customRadio3">Male</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline w-25">
                <input type="radio" className="custom-control-input" id="customRadio4" name="example2" {...partner_gender}/>
                <label className="custom-control-label" for="customRadio4">Female</label>
            </div>

            <div className="row mt-4">
                <div className="col-sm-4"> <select name="ages" className="custom-select my-2 ">
                        <option selected>Select Age Range</option>
                        <option value="18-25">18-25</option>
                        <option value="25-35">25-35</option>
                        <option value="35-45">35-45</option>
                        <option value="45-55">45-55</option>
                        <option value="55-65">55-65</option>
                        <option value="More">More</option>

                    </select></div>
                <div className="col-sm-4"> <select className="heights" className="custom-select my-2 ">
                        <option selected>Select Height Range</option>
                        <option value="140-150">140-150</option>
                        <option value="150-160">150-160</option>
                        <option value="160-170">160-170</option>
                        <option value="170-180">170-180</option>
                        <option value="180-190">180-190</option>
                        <option value="190-200">190-200</option>
                        <option value="More">More</option>


                    </select></div>
                <div className="col-sm-4"> <select name="weights" className="custom-select my-2">
                        <option selected>Select Weight Range</option>
                        <option value="50-60">50-60</option>
                        <option value="60-70">60-70</option>
                        <option value="70-80">70-80</option>
                        <option value="80-90">80-90</option>
                        <option value="90-100">90-100</option>
                        <option value="More">More</option>

                    </select></div>

            </div>


            <div w-100>
                <h6 className="mt-5">Which type of dance you want to do together?</h6>
                <div className="row mt-1">
                    <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" {...dance_preference} />
                            <label className="form-check-label" for="inlineCheckbox1">Ballet</label>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" {...dance_preference}/>
                            <label className="form-check-label" for="inlineCheckbox2">Salsa</label>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" {...dance_preference}/>
                            <label className="form-check-label" for="inlineCheckbox3">Waltz</label>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" {...dance_preference}/>
                            <label className="form-check-label" for="inlineCheckbox4">Tango</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox5" {...dance_preference}/>
                            <label className="form-check-label" for="inlineCheckbox5">Latin Dance</label>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox6" {...dance_preference}/>
                            <label className="form-check-label" for="inlineCheckbox6">Bachata</label>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox7" {...dance_preference}/>
                            <label className="form-check-label" for="inlineCheckbox7">American Rhythm</label>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" {...dance_preference}/>
                            <label className="form-check-label" for="inlineCheckbox8">Solo Dance</label>
                        </div>
                    </div>
                </div>


            </div>


          </div>
        </div>
          <div className="container my-3">
        <button type="button" className="btn btn-primary btn-block">Submit and meet your mathes now</button>
          </div>
                </form>
              
              {/* <Form onSubmit={e => {e.preventDefault();
              submitForm()}}>
              <Form.Group  controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                 <Form.Control
                      required
                      type="text"
                      placeholder="Please Enter Your Name"
                      {...name}
                    />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Please Enter Your Surname"
            {...surname}
            />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                required
                {...email}
                />
                <Form.Text className="text-muted">
                  We’ll never share your email with anyone else.
              </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                required
                {...password}
                />
              </Form.Group>
              <Button variant="primary" type="submit"> Submit
          </Button>
            </Form> */}
          </Modal.Body>
        </Modal>
      </div>)}
    </div>
  )
}
export default SignUp;
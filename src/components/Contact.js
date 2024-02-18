import { React, useRef} from 'react';
//import { Link } from 'react-router-dom'
// import Base from '../core/Base';
// import Footer from '../core/Footer';
// import googleIcon from '../google.png';
// import facebookIcon from '../facebook.png'
// import twitterIcon from '../twitter.png'
import ContactImg  from '../images/contact-us-image_croped.jpg'
import emailjs from '@emailjs/browser';


export default function Contact() {

    const form = useRef();
  
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_il9eu9v', 'template_mds83im', form.current, 'qj7S2OQsW3JtnHa5K')
        .then((result) => {
            alert("Form submitted successfully!")
        }, (error) => {
            alert(new Error("Some isssue in submitting the form please try after some time!"))
        });
    };


    const signInForm = () => {
        //const facebook = <FontAwesomeIcon icon={faFacebook} size="lg" />
       return (
           // <div className="bg-image">
          
           <div className="row container" id="formContainer" style={{ marginTop:'8%',marginLeft: '10%',marginRight: '10%',border:'1px solid gray',borderRadius:'10px',padding: 'inherit',marginBottom:'5%'}}>
               <div className="container col" style={{ width:'50%', float:'left',borderRight:'1px solid gray'}}>
                   <form  ref={form} onSubmit={sendEmail}>
                       {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                       <h3 className=" d-flex justify-content-center my-4 ">CONTACT US</h3>
                       {/* <div className="row mb-2" >
                           <div className="col">
                               <div className="form-outline">
                                   <label className="form-label" htmlFor="form3Example1">First name</label>
                                   <input type="text" id="form3Example1" className="form-control" />
                               </div>
                           </div>
                           <div className="col">
                               <div className="form-outline">
                                   <label className="form-label" htmlFor="form3Example2">Last name</label>
                                   <input type="text" id="form3Example2" className="form-control" />

                               </div>
                           </div>
                       </div> */}

                        {/* <!-- Name input --> */}
                        <div className="form-outline mb-2 row">
                            <div className="col">
                                <label className="form-label mx-2" htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" className="form-control" name='from_first_name'/>
                            </div>
                            <div className="col">
                                <label className="form-label mx-2" htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" className="form-control" name='from_last_name' />
                            </div>
                       </div>

                       {/* <!-- Email input --> */}
                       <div className="form-outline mb-2">
                           <label className="form-label mx-2" htmlFor="form3Example3">Email address</label>
                           <input type="email" id="form3Example3" className="form-control" name='from_email' />
                       </div>

                       {/* <!-- Phone input --> */}
                       <div className="form-outline mb-2">
                           <label className="form-label mx-2" htmlFor="form3Example3">Phone Number</label>
                           <input type="tel" id="form3Example3" className="form-control" name='from_mobile'/>
                       </div>

                       <div className="form-outline mb-2 ">
                           <label className="form-label mx-2" htmlFor="form3Example4">Upload Resume</label>
                           <input type="file" id="form3Example4" className="form-control"  name='message'/>
                       </div>
                       {/* <!-- Message input --> */}
                       <div className="form-outline mb-2 ">
                           <label className="form-label mx-2" htmlFor="form3Example4">Message</label>
                           <textarea type="text" id="form3Example4" className="form-control" maxLength={500} rows={4} name='message'/>
                       </div>

                       {/* <!-- Checkbox --> */}
                       {/* <div className="form-check d-flex justify-content-center mb-4">
                           <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                           <label className="form-check-label" htmlFor="form2Example33">
                               Subscribe to our newsletter
                           </label>
                       </div> */}

                       {/* <!-- Submit button --> */}
                      

                       <div className="form-check d-flex justify-content-center mb-4 my-4">
                       <button type="submit" className="btn btn-danger  btn-block mb-2">SUBMIT</button>
                           
                       </div>
                   </form>
               </div>
               <div className='col ' style={{padding: 'inherit'}}> 
                    <img src={ContactImg} className='img-fluid' style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}} alt=''></img>
               </div>
           </div>
           // </div>
       )
   }

   
    
    return (

        <>
            {signInForm()}
            {/* <Footer/> */}
        </>



    )
}
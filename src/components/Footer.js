import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEnvelope, faPhone, faPrint, faBuilding} from '@fortawesome/free-solid-svg-icons';
import facebookSmall from '../facebook-small.png' 
import twitterSamll from '../twitter-small.png'
import googleSmall from '../google-small.png'
import instagramSmall from '../instagram-small.png'
import linkedIn from '../linkedin-small.png' 

export default function Footer() {
    const address = <FontAwesomeIcon icon={faHouse} size="md" />
    const email = <FontAwesomeIcon icon={faEnvelope} size="md" />
    const phone = <FontAwesomeIcon icon={faPhone} size="md" />
    const fax = <FontAwesomeIcon icon={faPrint} size="md" />
    const company = <FontAwesomeIcon icon={faBuilding} size="lg" />

    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted">


                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5 pt-1">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-5 ">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    {company} JOBBOARD get hired
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">HOME</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">JOBBOARD</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">PAGE</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">CONTACT</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p> {address}  Rajarampuri 8th Lane,Kolhapur,India</p>
                                {/* <p> Maharashtra, India</p> */}
                                <p><a href="https://mail.google.com/mail/">{email} jobboard.support@bindok.com</a></p>
                                <p> {phone} + 91 234 567 88</p>
                                <p> {fax} + 91 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top ">
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="" className="me-4 text-reset">
                            <img src={facebookSmall}  alt="facebook small icon"/>
                        </a>
                        <a href="" className="me-4 text-reset">
                        <img src={twitterSamll}  alt="twitter small icon"/>
                        </a>
                        <a href="" className="me-4 text-reset">
                        <img src={googleSmall}  alt="google small icon"/>
                        </a>
                        <a href="" className="me-4 text-reset">
                        <img src={instagramSmall}  alt="instagram small icon"/>
                        </a>
                        <a href="" className="me-4 text-reset">
                        <img src={linkedIn}  alt="linkedIN small icon"/>
                        </a>
                        {/* <a href="" className="me-4 text-reset">
                        <img src={facebookSmall}  alt="facebook small icon"/>
                        </a> */}
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="http://localhost:3000/">www.jobboard.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}
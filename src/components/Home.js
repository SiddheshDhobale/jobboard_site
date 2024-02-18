import React from 'react';
import '../App.css';
import JsonRes from '../APIRes.json';
//import HomeImage from '../images/MainImage.png';
//import manSearching from '../images/ManSearching.jpg'
import GoogleLogo from '../images/google-logo-history-png-2595.png'
import AppleLogo from '../images/png-apple-logo-9712.png'
import FordLogo from '../images/ford-logo-png-1796.png'
import YoutubeLogo from '../images/youtube-logo-png-2065.png'
import NetflixLogo from '../images/netflix-logo-png-2562.png'
import PaypalLogo from '../images/paypal-logo-png-2114.png'
import FedexLogo from '../images/fedex-logo-42681.png'
import AdidasLogo from '../images/adidas-logo-png-2362.png'
import AmazonLogo from '../images/amazon-png-logo-vector-6701.png'
import HandImage from '../images/HandImage.jpg'
import Navbar from './Navbar';
//import GoogleLogo from '../images/google.png'
import { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";

export default function Home() {

    let [parsedData, setParsedData] = useState([]);


    useEffect(() => {
        async function LinkTest() {
            try {

                let url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=95161bde&app_key=e4819dba45ade13ec68a9d794f36a111`
                const fetchedData = await fetch(url);

                if (fetchedData.status === 200) { console.log("OK") }
                let parsedData1 = await fetchedData.json();
                //console.log(parsedData1);
                setParsedData(parsedData1.results);
                //results = parsedData.results;
                //console.log(parsedData);
                //console.log(parsedData[0].id);
            } catch (error) {
                console.log(new Error("Too many request made API blocked for 24 hours"))
            }

        }
        LinkTest();
    }, []);

    // parsedData.forEach((index)=>{
    //     console.log(index.id);
    // })

    return (
        <>
            <div className='main-img'>
                {/* <Navbar/> */}
                <div className='background-img'>
                    <img src={HandImage} className="img-fluid" alt="Background_img" ></img>
                </div>
                <div className='text-on-img'>
                    <h1>ARE YOU SEARCHING FOR A JOB?</h1>
                    <h3>We are here to help you</h3>

                    <button type="button" className="btn btn-danger mx-3 my-3" style={{ fontSize: '20px', padding: '10px 25px' }}><Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}><b>Upload Resume</b></Link></button>
                    <button type="button" className="btn btn-secondary mx-3 my-3" style={{ fontSize: '20px', padding: '10px 25px' }}><Link to='/browseJob' style={{ textDecoration: 'none', color: 'white' }}><b>Find Job</b></Link></button>

                </div>
            </div>

            <div className='text-center  '>
                <h1 className='my-4 py-3'>FIND THE TOP TRENDING JOBS</h1>


                <div className="container" >
                    <div className="row ">
                        {
                            JsonRes && JsonRes.map((data) => {
                                return (
                                    <div className="col-md-4" key={data.id}>
                                        <div className="card mx-4">
                                            {/* <img src={GoogleLogo} className="card-img-top" alt="googleLogo" /> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title.slice(0, 36)}</h5>
                                                <p className="card-text">{data.description.slice(0, 150)}...</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>


            {/* <div className='text-center  '>
                <div className="col">
                    <div className="card mx-4">
                        <img src={GoogleLogo} className="card-img-top" alt="googleLogo" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mx-4">
                        <img src={GoogleLogo} className="card-img-top" alt="googleLogo" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mx-4">
                        <img src={GoogleLogo} className="card-img-top" alt="googleLogo" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-md-4 g-3" style={{ margin: 'auto' }}>
                    <div className="col">
                        <div className="card mx-4">
                            <img src={GoogleLogo} className="card-img-top" alt="googleLogo" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mx-4">
                            <img src={GoogleLogo} className="card-img-top" alt="googleLogo" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mx-4">
                            <img src={GoogleLogo} className="card-img-top" alt="googleLogo" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mx-4">
                            <img src={GoogleLogo} className="card-img-top" alt="googleLogo" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div > */}






            <div className="container-fluid bg-danger">
                <div>
                    <h1 className=' py-4 text-center text-white'>JOB SITE STATS</h1>
                    <div className='row my-2 py-2 text-center text-white' style={{ margin: '10%' }}>
                        <h5>We have a world wide count of our Candidates, Job filled, Job Posted and companies <br />The count is icreasing</h5>

                        <div className='col my-2'>
                            <h1>2570</h1>
                            <p><strong>Candidates</strong></p>
                        </div>
                        <div className='col my-2'>
                            <h1>10000+</h1>
                            <p><strong>Job Posted</strong></p>
                        </div>
                        <div className='col my-2'>
                            <h1>1020</h1>
                            <p><strong>Job Filled</strong></p>
                        </div>
                        <div className='col my-2'>
                            <h1>150+</h1>
                            <p><strong>companies</strong></p>
                        </div>
                    </div>

                </div>
            </div><div className="container-fluid bg-light">
                <div>
                    <h1 className=' py-4 text-center text-black'>TOP COMPANIES WE HAVE HELPED</h1>
                    <div className='row my-2 py-2 text-center text-black' style={{ margin: '10%' }}>
                        <h5 className='my-2'>Porro error reiciendis commodi beatae omnis similique voluptate rerum <br />ipsam fugit mollitia ipsum facilis expedita tempora suscipit iste</h5>

                        <div className='row row-cols-4 align-items-center'>
                            <div className='col col-lg-3 col-md-6 text-center '>

                                <img className="img-fluid company-logos" src={GoogleLogo}></img>
                            </div>
                            <div className='col col-lg-3 col-md-6 text-center '>

                                <img className="img-fluid company-logos" src={FordLogo}></img>
                            </div>
                            <div className='col col-lg-3 col-md-6 text-center '>

                                <img className="img-fluid company-logos" src={AmazonLogo}></img>
                            </div>
                            <div className='col col-lg-3 col-md-6 text-center '>

                                <img className="img-fluid company-logos" src={YoutubeLogo}></img>
                            </div>
                            <div className='col col-lg-3 col-md-6 text-center '>

                                <img className="img-fluid company-logos" src={NetflixLogo}></img>
                            </div>
                            <div className='col col-lg-3 col-md-6 text-center '>

                                <img className="img-fluid company-logos" src={PaypalLogo}></img>
                            </div>
                            <div className='col col-lg-3 col-md-6 text-center '>

                                <img className="img-fluid company-logos" src={AdidasLogo}></img>
                            </div>
                            <div className='col col-lg-3 col-md-6 text-center '>

                                <img className="img-fluid company-logos" src={FedexLogo}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div><div className="container-fluid bg-danger px-2 align-items-center">
                <div className="d-flex align-items-center " style={{ marginLeft: '10%', marginRight: '10%' }}>
                    <span className='py-4  mx-4 px-4 text-left text-white' style={{ paddingLeft: '30%', fontSize: '50px' }}>Don't know from where to start? Just do </span>
                    <button type="button" className="btn btn-primary " style={{ fontSize: '30px', borderRadius: '7px' }}><b>SIGN UP</b></button>
                </div>
            </div>
        </>

    );

}
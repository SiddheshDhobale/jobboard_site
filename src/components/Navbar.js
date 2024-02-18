import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar()
{
    return(
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top py-3" >  
    {/* bg-light */}
    <div className="container" style={{maxWidth:'1100px', backgroundColor:'transparent'}} >
      <a className="navbar-brand" href="/"><b>JOBBOARD</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
          <li className="nav-item mx-2">
            <a className="nav-link nav-link-ltr" aria-current="page" href="/"><b>HOME</b></a>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link nav-link-ltr" to="/browseJob"><b>BROWSE JOB</b></Link>
          </li>
          {/* <li className="nav-item dropdow">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">PAGE</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
          <li className="nav-item mx-2 dropdown">
            <a className="nav-link nav-link-ltr dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>PAGE</b>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">Blog</a></li>
              <li><a className="dropdown-item" href="/">Candidates</a></li>
              <li><a className="dropdown-item" href="/">Membership</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Job Detailes</a></li>
            </ul>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link nav-link-ltr" to="/contact"><b>CONTACT</b></Link>
            {/* <a className="nav-link nav-link-ltr" href="/"><b>CONTACT</b></a> */}
          </li>
          
        </ul>
        
        <button type="button" className="btn btn-secondary mx-3" ><b>POST JOB</b></button>
        <button type="button" className="btn btn-primary mx-3"><b>LOG IN</b></button>
      </div>
    </div>
  </nav>
  );
    
}
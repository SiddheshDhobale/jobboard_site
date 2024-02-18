import React from 'react'
//import AppleLogo from '../images/png-apple-logo-9712.png'
import JsonRes from '../APIRes.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faBusinessTime,faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';

export default function BrowseJob() {

  const location = <FontAwesomeIcon icon={faLocationDot} />
  const time =  <FontAwesomeIcon icon={faBusinessTime} />
  const salary = <FontAwesomeIcon icon={faIndianRupeeSign} />
  return (
    <div className="list-group " style={{marginTop: '8%', marginLeft: '15%', marginRight: '15%', borderRadius: '10px', padding: 'inherit', marginBottom: '5%' }}>
      {
        JsonRes && JsonRes.map((data) => {
          return (
            // <a href="/" className="list-group-item list-group-item-action " aria-current="true">
            <div className="list-group-item list-group-item-action " aria-current="true">
              <div className='row'>
                {/* <div className='img-fluid company-logos col col-md-2'>
                  <img src={AppleLogo} alt='' style={{ width: '5%', height: '5%' }}></img>
                </div> */}
                <div className="col  d-flex w-100 justify-content-between">

                  <h5 className="mb-1 mx-4" >{data.title}</h5>
                  {/* style={{ fontSize: '30px' }} */}
                  <small>posted on: {data.created.slice(0, 10)}</small>
                </div>
              </div>
              <div className='row align-items-center'>
                <div className="col  d-flex w-50 justify-content-between" style={{ marginTop: '2%' }}>
                  {/* <p className="mb-1">{data.description.slice(0, 25)}...</p> */}
                  <div class="col">
                    <span className="mx-4">{location} {data.location.area[2]}</span>
                    <span className=" mx-4">{time} {data.contract_time}</span>
                    <span className="mx-4">{salary} {data.salary_max}</span>
                  </div>
                </div>
                <div class="col col-lg-2 " style={{ marginTop: '2%' }}>
                  <a href={data.redirect_url}>
                    <button className=" btn btn-warning" style={{ float: 'right' }} >Apply Now</button>
                  </a>
                </div>
              </div>
            {/* // </a> */}
            </div>
          )
        })

      }

    </div>
    //   <a href="/" className="list-group-item list-group-item-action">
    //     <div className="d-flex w-100 justify-content-between">
    //       <h5 className="mb-1">List group item heading</h5>
    //       <small className="text-muted">3 days ago</small>
    //     </div>
    //     <p className="mb-1">Some placeholder content in a paragraph.</p>
    //     <small className="text-muted">And some muted small print.</small>
    //   </a>
    //   <a href="/" className="list-group-item list-group-item-action">
    //     <div className="d-flex w-100 justify-content-between">
    //       <h5 className="mb-1">List group item heading</h5>
    //       <small className="text-muted">3 days ago</small>
    //     </div>
    //     <p className="mb-1">Some placeholder content in a paragraph.</p>
    //     <small className="text-muted">And some muted small print.</small>
    //   </a>
    // </div>
  )
}

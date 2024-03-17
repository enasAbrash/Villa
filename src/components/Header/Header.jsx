import React from 'react'
import './HeaderStyle.css';
import { FaEnvelope ,FaMap,FaFacebook,FaTwitter,FaLinkedin,FaInstagram} from "react-icons/fa";
const Header = () => {
  return (
    <div className="sub-header">
    <div className='container'>
<div className="row">

    <div className="col-lg-8 col-md-8 " >
<ul className="info">
<i><FaEnvelope style={{}} /></i> 
<li> info@company.com</li>
<i><FaMap /></i>
 <li> Sunny Isles Beach, FL 33160</li>
</ul>

    </div>

    <div className="col-lg-4 col-md-4 ">
<ul className="social-links">
    <li><FaFacebook className='aa'/></li>
     <li><FaTwitter className='aa' /></li>
     <li><FaLinkedin className='aa' /></li>
     <li><FaInstagram className='aa' /></li>
</ul>

    </div>
</div>

    </div>
    </div>
  )
}

export default Header
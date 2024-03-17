import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import MiniCard from '../../components/MiniCard/MiniCard'
import email from '../../assets/images/email-icon.png'
import phone from '../../assets/images/phone-icon.png'
import './ContactStyle.css'
import Hero from '../../components/Hero/Hero'


const Contact = () => {
  return (
    <>
   <Hero btn="HOME/CONTACT US"  tittle="CONTACT US"/>

    <div className='contact-section'>
 <div className="container">
    <div className="row">
<div className="col-lg-6">

    <div className="section-heading">
<h6>|Contact Us</h6>
<h2>Get In Touch With Our Agents</h2>
    
    <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
   
</div>
<div className='contact-minicard'><MiniCard im={phone} detail1="010-020-0340" detail2="Phone Number"/></div>
   <div className='contact-minicard'> <MiniCard im={email} detail1="info@villa.co" detail2="Business Email"/></div>
<div >


</div>
<div >

</div>

</div>
<div className="col-lg-6">
<ContactForm/>
</div>

    </div>
 </div>

</div>
</>
  
  )
}

export default Contact
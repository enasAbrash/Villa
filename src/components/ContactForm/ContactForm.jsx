import './ContactFormStyle.css';


const ContactForm = () => {
  return (
    <div className='form-container'>
   <form id="contact-form">
<div className="row">
<div className="col-lg-12">
    <fieldset>
        <label for="name">Full Name</label>
        <input type="name" name="name" id="name" placeholder='Your Name...' autoComplete='on' required/>
    </fieldset>
    </div>
    <div className="col-lg-12">
    <fieldset>
        <label for="email">Email Address</label>
        <input type="text" name="email" id="email" placeholder='Your Email...' />
    </fieldset>
</div>
<div className="col-lg-12">
    <fieldset>
        <label for="subject">Subject</label>
        <input type="text" name="subject" id="subject" placeholder='Subject...'  autoComplete='on' />
    </fieldset>
</div>
<div className="col-lg-12">
    <fieldset>
        <label for="message">Message</label>
        <textarea type="text" name="message" id="message" placeholder='Your Message...'  />
    </fieldset>
</div>
<div className="col-lg-12">
    <fieldset>
<button type='submit' id='form-submit'>Send Message</button>   </fieldset>
</div>

</div>



   </form>
   </div>
  )
}

export default ContactForm
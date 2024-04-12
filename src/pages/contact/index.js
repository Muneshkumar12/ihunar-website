import React from 'react';
import Layout from '../../layout';
import { PageHeader, SecHeader } from '../../components';
import '../../styles/contact.css';
import { Grid } from '@material-ui/core';
import contactBanner from '../../images/contact-fb04464fe760be65b352a1a00c08abb2.png'
const Contact = () => {
  return (
    <Layout>
      <PageHeader pageName="Contact" />
      <div className='contact-data-1'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <div className='contact-data-card'>
              <i className="contact-icons fa-sharp fa-solid fa-location-dot"></i>
              <div>
                <h1>Our Address</h1>
                <p>1st Floor Kallar House, North Colony, Mithi, Pakistan</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <div className='contact-data-card'>
              <i className="contact-icons fa-solid fa-phone-volume"></i>
              <div>
                <h1>Contact</h1>
                <a href='tel:+923322511711'>Mobile: +92-33-22511711</a>
                <a href='mailto:info@hunar.com'>E-mail: info@hunar.com</a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <div className='contact-data-card'>
              <i className="contact-icons fa-regular fa-clock"></i>
              <div>
                <h1>Hours of Operation</h1>
                <p>Monday - Friday: 09:00 - 17:00</p>
              </div>
            </div>
          </Grid>
        </Grid>
        <SecHeader title="GET IN TOUCH" heading="Request A Free Consultation" />
        <Grid container spacing={2} className='contact-form-sec'>
          <Grid item xs={12} md={6}>
            <img src={contactBanner} className='contact-banner'/>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='contact-form-div'>
              <form>
                <input type='text' placeholder='Your name' required/>
                <input type='email' placeholder='Your Email address' required/>
                <input type='number' placeholder='Number (optional)' />
                <input type='text' placeholder='Subject' required/>
                <textarea type="text" placeholder='Your Message (optional)' />
               <button className='send-message-btn' >Send Message</button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>

    </Layout>
  )
}

export default Contact;

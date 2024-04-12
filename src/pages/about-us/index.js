import React from 'react'
import Layout from '../../layout';
import { PageHeader, SecHeader } from '../../components';
import '../../styles/about-us.css';
import aboutUsImg from '../../images/about-img-poster.png'
import { Grid } from '@material-ui/core';
const AboutUs = () => {
  return (
    <Layout>
      <PageHeader pageName="About Us" />
      <div className='about-us'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} className='about-sec-header'>
            <img src={aboutUsImg} alt='about us' />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className='about-sec-data'>
            <SecHeader title="ABOUT IHUNAR" heading="Excellent IT services for your success" para="We Are Increasing Business Success With Technology. Over 1 year working in IT services developing software applications, websites and mobile apps for clients all over the World." />
          </Grid>
        </Grid>
        <Grid container spacing={3} className='about-sec-2' >
          <Grid item xs={12} sm={12} md={4} lg={4} >
            <h1 className='about-sec-data-2'>Our Mission</h1>
            <p  className='about-sec-data-2-para'>To cater to every Software need, Swiftly and Effectively</p>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <h1  className='about-sec-data-2'>Our Vision</h1>
            <p  className='about-sec-data-2-para'>To be the best software solution provider in the world, helping change the world of Technology through our top-notch Software Engineering Solutions4</p>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default AboutUs;

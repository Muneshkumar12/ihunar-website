import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import '../../styles/home.css';
import Layout from '../../layout';
import { ProjectSec, SecHeader } from '../../components';
import homeBanner from '../../images/home-sec-poster.png';
import bannerTwo from '../../images/home-sec-poster-2.png';
import flowerImg from '../../images/flower.png';
import softwareImg from '../../images/Software Development.png';

// mobile
import iosImg from '../../images/ios.png';
import androidImg from '../../images/Android.png';
import reactNativeImg from '../../images/React Native.png';
import expoImg from '../../images/Expo.png';
// frontend
import reactJsImg from '../../images/React Js.png';
import gatsbyJSImg from '../../images/Gatsby Js.png';
import typeScriptImg from '../../images/TypeScript.png';
import htmlImg from '../../images/HTML5.png';
import cssImg from '../../images/CSS3.png';
// database
import mongoDbIMg from '../../images/Mongo DB.png';
import firebaseImg from '../../images/Firebase.png';
import dynamoDbImg from '../../images/DynamoDB.png';
// backend
import nodeJsImg from '../../images/NodeJs.png';
// cms
import wordPressImg from '../../images/WordPress logo.png';
// devops
import awsImg from '../../images/AWS.png'

// aos animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  const Nevigate = useNavigate()
  AOS.init();
  // service card data
  const serviceCardData = [
    {
      cardImg: softwareImg,
      cardHeading: "Software Development",
      cardDetails: "Making software programs are not an easy job, but our Software developers are very experienced and familiar with all modern tools.",
    },
    {
      cardImg: softwareImg,
      cardHeading: "Web Development",
      cardDetails: "Our Flexible and Expert IT team can turn your local or international business or idea into Responsive and attractive website.",
    },
    {
      cardImg: softwareImg,
      cardHeading: "WordPress",
      cardDetails: "WordPress is a Simplest but most powerful and popular tool. You can easily manage your site, even if you don't have any IT experience.",
    },
    {
      cardImg: softwareImg,
      cardHeading: "Mobile App Development",
      cardDetails: "Our Mobile App Developers are adopting modern user based methodologies, and technologies for building both IOS AND Android mobile apps.",
    },
    {
      cardImg: softwareImg,
      cardHeading: "Product & Design",
      cardDetails: "Product designing is exactly what end-user see. Our creative graphics designers will make a suitable and fresh design ideas for your product.",
    },
    {
      cardImg: softwareImg,
      cardHeading: "Ecommerce",
      cardDetails: "Our professional Market Expert will solve your problem related to Online Shopping. We will provide you solution related to Amazon and Shopify Stores.",
    },
  ]
  const handleViewDetails = (index) => {
    const headings = ["Software Development", "Web Development", "WordPress", "Mobile App Development", "Product & Design", "Ecommerce"];
    console.log("Clicked on:", headings[index]);
  };


  // technology card buttons and data
  const [activeButton, setActiveButton] = useState(1);
  const [technologyCardData, settechnologyCardData] = useState([
    {
      cardImg: iosImg,
      CardName: "ios"
    },
    {
      cardImg: androidImg,
      CardName: "android"
    },
    {
      cardImg: reactNativeImg,
      CardName: "react Native"
    },
    {
      cardImg: expoImg,
      CardName: "expo"
    },

  ])
  const buttonLabels = {
    1: "MOBILE",
    2: "FRONT END",
    3: "DATABASE",
    4: "BACKEND",
    5: "CMS",
    6: "DEVOPS",
  };
  const handleButtonClick = (buttonNum) => {
    setActiveButton(buttonNum);
    console.log(buttonLabels[buttonNum])
    if (buttonLabels[buttonNum] === "MOBILE") {
      settechnologyCardData([
        {
          cardImg: iosImg,
          CardName: "iOS"
        },
        {
          cardImg: androidImg,
          CardName: "android"
        },
        {
          cardImg: reactNativeImg,
          CardName: "react Native"
        },
        {
          cardImg: expoImg,
          CardName: "expo"
        },

      ])
    } else if (buttonLabels[buttonNum] === "FRONT END") {
      settechnologyCardData([
        {
          cardImg: reactJsImg,
          CardName: "React js"
        },
        {
          cardImg: gatsbyJSImg,
          CardName: "Gatsby Js"
        },
        {
          cardImg: typeScriptImg,
          CardName: "TypeScript"
        },
        {
          cardImg: htmlImg,
          CardName: "HTML5"
        },
        {
          cardImg: cssImg,
          CardName: "CSS3"
        },

      ])
    }
    else if (buttonLabels[buttonNum] === "DATABASE") {
      settechnologyCardData([
        {
          cardImg: mongoDbIMg,
          CardName: "Mongo DB"
        },
        {
          cardImg: firebaseImg,
          CardName: "Firebase"
        },
        {
          cardImg: dynamoDbImg,
          CardName: "DynamoDB"
        }
      ])
    } else if (buttonLabels[buttonNum] === "BACKEND") {
      settechnologyCardData([
        {
          cardImg: nodeJsImg,
          CardName: "Node .JS"
        }
      ])
    } else if (buttonLabels[buttonNum] === "CMS") {
      settechnologyCardData([
        {
          cardImg: wordPressImg,
          CardName: "WordPress"
        }
      ])
    } else if (buttonLabels[buttonNum] === "DEVOPS") {
      settechnologyCardData([
        {
          cardImg: awsImg,
          CardName: "AWS"
        }
      ])
    }
  };
  return (
    <Layout bgColor="#d1beda">
      <section id='home-main'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} className='home-data'>
            <h1 data-aos="fade-right">iHunar - IT Company</h1>
            <p data-aos="fade-right">IT services provider company managed by highly experienced information technology professionals. </p>
            <button className='get-touch-btn' onClick={() =>Nevigate("/contact")}>Get in Touch</button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className='home-poster' data-aos="fade-up">
            <img src={homeBanner} />
          </Grid>
        </Grid>
      </section>
      <div className='home-sec-two'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} className='home-sec-two-data' >
            <div><img src={flowerImg} />PEOPLE LOVE US</div>
            <h1>Why Should you choose iHunar?</h1>
            <p>We have been working since 2020, as an IT services provider company, we are developing software applications and mobile apps, designing websites, branding businesses for clients all over the world.</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className='home-banner-two' >
            <img src={bannerTwo} />
          </Grid>
        </Grid>
      </div>
      <section className='services-sec'>
        <SecHeader title="OUR SERVICES" heading={
          <>
            We Are Offering All sort of IT <br /> Solutions Services
          </>
        } />
        <Grid container spacing={2} >
          {serviceCardData.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index} >
                <div className='service-card'>
                  <img src={item.cardImg} alt={item.cardHeading} />
                  <h1>{item.cardHeading}</h1>
                  <p>{item.cardDetails}</p>
                  <button onClick={() => handleViewDetails(index)}>View Details &rarr;</button>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </section>
      <section className='Technology-sec'>
        <SecHeader title="TECHNOLOGIES" heading="Technologies we work with
" />
        <div className='tehcnology-div'>
          <div className='technology-btn-div'>
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <button
                key={index}
                className={activeButton === num ? "technology-btns" : "technology-btns-active"}
                onClick={() => handleButtonClick(num)}
              >
                {buttonLabels[num]}
              </button>
            ))}
          </div>
          <div className='tehcnologyy-card-div'>
            {/* {buttonLabels[activeButton]} is Active */}
            <Grid container spacing={3}>
              {technologyCardData.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={3} lg={3} key={index} style={{ margin: "auto" }}>
                    <div className='technology-card'>
                      <img src={item.cardImg} />
                      <p>{item.CardName}</p>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </div>
      </section>
      <ProjectSec onClick={() =>Nevigate("/contact")} heading="We Like to Start Your Project With Us" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." btnTitle="Get Started"/>
      <div className='working-process'>
        <SecHeader title="OUR WORKING PROCESS" heading={
          <>
            Greater control over different<br /> projects through Agile<br /> Methodology.
          </>
        } para="Our major role is customer satisfaction by rapid delivery of softwares." />
      </div>
     
    </Layout>
  )
}

export default Home

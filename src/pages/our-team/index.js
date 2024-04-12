import React from 'react';
import Layout from '../../layout';
import { PageHeader } from '../../components';
import Grid from '@mui/material/Grid';
import '../../styles/team.css';
import pardeepImg from '../../images/Pardeep-Meghwar-.png';
import AhmedImg from '../../images/Ahmed-Ali.png';
import SumairImg from '../../images/Sumair Jaffar.jpg';
import DanishImg from '../../images/Danish Raaz.png';
import AkashImg from '../../images/Akash Sukhani.jpg';
import AmarImg from '../../images/Amar Suthar.png';
import HishmatImg from '../../images/Hishmat Rai.png';
import BeerbalImg from '../../images/Beerbal.png';
import SunilImg from '../../images/Suneel Kumar.png';
import KhatuImg from '../../images/Khatu Mal.jpg';
import KhanjiImg from '../../images/Khanji Pir.jpg';
const OurTeam = () => {
  const teamCardData = [
    {
      teamImg: pardeepImg,
      Name: "Pardeep Meghwar",
      category: "Founder& CEO",
      LinkedinUrl: "https://www.linkedin.com/in/pardeepmeghwar/?originalSubdomain=pk",
    },
    {
      teamImg: AhmedImg,
      Name: "Ahmed Ali",
      category: "Co-Founder & Chairman",
      LinkedinUrl: "https://www.linkedin.com/in/ahmed-ali263/",
    },
    {
      teamImg: SumairImg,
      Name: "Sumair Jaffar",
      category: "Vice Chairman",
      LinkedinUrl: "/team"
    },
    {
      teamImg: DanishImg,
      Name: "Danish Raaz",
      category: "Lead Trainer",
      LinkedinUrl: "/https://www.linkedin.com/in/danishraaz/?originalSubdomain=pk"
    },
    {
      teamImg: AkashImg,
      Name: "Akash Sukhani",
      category: "Manager",
      LinkedinUrl: "https://www.linkedin.com/in/akash-sukhani-040347159/"
    },
    {
      teamImg: AmarImg,
      Name: "Amar Suthar",
      category: "Frontend Developer",
      LinkedinUrl: "https://www.linkedin.com/in/amar-shivani-021a0a17b/"
    },
    {
      teamImg: HishmatImg,
      Name: "Hishmat Rai",
      category: "Web Developer",
      LinkedinUrl: "https://www.linkedin.com/in/hishmat-rai-787737170/"
    },
    {
      teamImg: BeerbalImg,
      Name: "Beerbal",
      category: "Web Developer",
      LinkedinUrl: "https://www.linkedin.com/in/beerbal-kumar-7893a418b/"
    },
    {
      teamImg: SunilImg,
      Name: "Suneel Kumar",
      category: "Mobile App Developer",
      LinkedinUrl: "https://www.linkedin.com/in/suneel-kumar-b4b0a117b/"
    },
    {
      teamImg: KhatuImg,
      Name: "Khatu Mal",
      category: "Mobile App Developer",
      LinkedinUrl: "https://www.linkedin.com/in/khatu-mal-75bb8318b/"
    },
    {
      teamImg: KhanjiImg,
      Name: "Khanji Pir",
      category: "Graphic Designer",
      LinkedinUrl: "https://www.linkedin.com/in/khanji-pir714131216/"
    },

  ]
  return (
    <Layout>
      <PageHeader pageName="Team" />
      <div className='our-team'>
        <Grid container spacing={2} sx={{ margin: 'auto', maxWidth: '100%' }}>

          {teamCardData.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <div className='team-card'>
                  <img className='team-img' src={item.teamImg} alt='pardeer' />
                  <h1>{item.Name}</h1>
                  <p>{item.category}</p>
                  <a href={item.LinkedinUrl} target='_blank'>  <i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </Layout>
  )
}

export default OurTeam;

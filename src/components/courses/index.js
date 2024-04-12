import React from 'react'
import '../../styles/course.css'
import { Grid } from '@material-ui/core'
const CourseData = ({ image, list }) => {
    return (
        <div className='course-data'>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8} className='course-data-detail'>
                    <img src={image} alt="about" />
                    <h1>About this Services</h1>
                    <p>Making software programs are not an easy job, but our Software developers are very experienced and familiar with all modern tools</p>
                    <h1>Technologies That We Use</h1>
                    <ul className='course-list'>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <div className='course-list-contact'>
                        <h1>Contact Info</h1>
                        <div className='course-contact-inner'>
                            <i className="fa-regular fa-id-badge"></i>
                            <div><h1>Phone:</h1><a href="tel:+923322511711">+92-33-22511711</a></div>
                        </div>
                        <div className='course-contact-inner'>
                            <i className="fa-solid fa-location-dot"></i>
                            <div><h1>Location:</h1><p>1st Floor Kallar House, North Colony, Mithi, Sindh Pakistan</p></div>
                        </div>
                        <div className='course-contact-inner'>
                            <i className="fa-regular fa-envelope"></i>
                            <div><h1>Email:</h1><a href='mailto:info@ihunar.com'>info@ihunar.com</a></div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CourseData

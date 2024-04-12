import React from 'react'
import '../../styles/project-sec.css'
import projectImg from '../../images/Project.png'
import { Grid } from '@material-ui/core'
const ProjectSec = ({ heading, para, btnTitle,onClick }) => {
  return (
    <div className='Project-div'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} className='project-img'>
          <img src={projectImg} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className='project-data'>
          <h1>{heading}</h1>
          <p>{para}</p>
          <button onClick={onClick}>{btnTitle}</button>
          {/* <div className="circle-shape1">
          <img src="https://ihunar.com/static/circle-shape1-84499f1a9f5baf6107753940a219d149.png" alt="project" />
        </div> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default ProjectSec

import React from 'react'
import '../../styles/working-process.css'
const WorkingProcessSec = () => {
  return (
    <section className='working-process'>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className='item-div'>
          <span>1</span>
          <div>
            <h1>Requirements</h1>
            <p>Our Project Management team collect requirement and analyse them for preparing road map, sprint and initiate plan.</p>
          </div>
        </div>
        <div className='item-div'>
          <span>2</span>
          <div>
            <h1>Planning</h1>
            <p>iHunar Project Management team breakdown the all requirements and set priorities and in the last iterate them for scheduling.</p>
          </div>
        </div>
        <div className='item-div'>
          <p className='last-span'>3</p>
          <div>
            <h1>Design</h1>
            <p>Share architecture spike analysis, design and implement the prototype.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className='item-div'>
          <span>4</span>
          <div>
            <h1>Development</h1>
            <p>iHunar Project Management team breakdown the all requirements and set priorities and in the last iterate them for scheduling.</p>
          </div>
        </div>
        <div className='item-div'>
          <span>5</span>
          <div>
            <h1>Testing</h1>
            <p>Team will work on testing, identify defects, and resolve those bugs.</p>
          </div>
        </div>
        <div className='item-div'>
          <p className='last-span'>6</p>
          <div>
            <h1>Release & Review</h1>
            <p>Demonstrate the user's stories, implemented and done to the product owner.</p>
          </div>
        </div>
      </Grid>
    </Grid>
  </section>
  )
}

export default WorkingProcessSec

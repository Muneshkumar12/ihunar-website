import React from 'react';
import Layout from '../../layout';
import { CourseData, PageHeader } from '../../components';
import webDevBanner from '../../images/web-development-banner.png'
const WebDevelopment = () => {
  const webTechnology=["HTML5","CSS3","JavaScript","Reactjs","Redux","Typescript","Firebase","Nodejs","MongoDB"]
  return (
    <Layout>
      <PageHeader pageName="Web Development"/>
      <CourseData image={webDevBanner} list={webTechnology}/>
    </Layout>
  )
}

export default WebDevelopment;

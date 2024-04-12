import React from 'react';
import Layout from '../../layout';
import {CourseData, PageHeader } from '../../components';
import MobileDevBanner from '../../images/MobileApp-banner.png'
const MobileAppDevelopment = () => {
  const MobileTechnology=["React Native","Expo","JavaScript","Android Studio","Redux","Typescript","Firebase","Nodejs","MongoDB"]
  return (
    <Layout>
      <PageHeader pageName="Mobile App Development"/>
      <CourseData image={MobileDevBanner} list={MobileTechnology}/>
    </Layout>
  )
}

export default MobileAppDevelopment;

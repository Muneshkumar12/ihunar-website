import React from 'react';
import Layout from '../../layout';
import { PageHeader,CourseData } from '../../components';
import SoftwareDevBanner from '../../images/SoftwareDevelopment-banner.png'
const SoftwareDevelopment = () => {
  const softwareTechnology =["JavaScript","HTML","Git","CSS","SQL"]
  return (
    <Layout>
      <PageHeader pageName="Software Development" />
      <CourseData image={SoftwareDevBanner} list={softwareTechnology}/>
    </Layout>
  )
}

export default SoftwareDevelopment;

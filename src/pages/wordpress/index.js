import React from 'react';
import Layout from '../../layout';
import { CourseData,PageHeader } from '../../components';
import WordPressImg from '../../images/WordPress-banner.png'
const WordPress = () => {
  const wordpressTechnology=["JavaScript","HTML","Git","CSS","SQL"]
  return (
    <Layout>
      <PageHeader pageName="Wordpress"/>
      <CourseData image={WordPressImg} list={wordpressTechnology}/>
    </Layout>
  )
}

export default WordPress;

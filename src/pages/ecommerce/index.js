import React from 'react';
import Layout from '../../layout';
import {CourseData, PageHeader } from '../../components';
import EcommerceBanner from '../../images/ProductDesign-banner.png'
const Ecommerce = () => {
  const ecommerceTechnology = ["Adobe Photoshop","Adobe illustrator","Adobe XD"]
  return (
    <Layout>
      <PageHeader pageName="Ecommerce"/>
      <CourseData image={EcommerceBanner} list={ecommerceTechnology}/>
    </Layout>
  )
}

export default Ecommerce;

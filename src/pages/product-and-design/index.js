import React from 'react';
import Layout from '../../layout';
import {CourseData, PageHeader } from '../../components';
import productBanner from '../../images/ProductDesign-banner.png'
const ProductAndDesign = () => {
  const productTechnology  = ["Adobe Photoshop","Adobe illustrator","Adobe XD"]
  return (
    <Layout>
      <PageHeader pageName="Product & Design"/>
      <CourseData image={productBanner} list={productTechnology}/>
    </Layout>
  )
}

export default ProductAndDesign;

import React from 'react';
import Layout from '../../layout';
import { PageHeader, ProjectSec } from '../../components';
import { useNavigate } from 'react-router-dom';
const Jobs = () => {
  const Nevigate = useNavigate()
  return (
    <Layout>
      <PageHeader pageName="Jobs"/>
      <ProjectSec onClick={()=>Nevigate('/')} heading="Jobs" para="Do you want to work for a leading Software House where the customer is always at the center of attention? Apply Now to secure a position at iHunar." btnTitle="Apply Now"/>
    </Layout>
  )
}

export default Jobs;

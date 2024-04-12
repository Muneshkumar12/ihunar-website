import React from 'react';
import Layout from '../../layout';
import { PageHeader, ProjectSec } from '../../components';
import { useNavigate } from 'react-router-dom';
const Internship = () => {
  const Nevigate = useNavigate()
  return (
    <Layout>
      <PageHeader pageName="Internship"/>
      <ProjectSec onClick={()=>Nevigate("/")} heading="Internships" para="If you're a student with an interest in Technical fields such as Web Development, Mobile App Development, Designing, and Digital Marketing, then apply for one of our internship programs." btnTitle="Apply Now"/>
    </Layout>
  )
}

export default Internship;

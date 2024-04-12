import React from 'react'
import '../../styles/page-header.css'
import pageHeaderFlower from '../../images/page-flower.svg';
import pageHeaderCircle from '../../images/page-header-circle.png'
import pageHeaderImg3 from '../../images/page-header-image3.png'
import { useNavigate } from 'react-router-dom'
const PageHeader = ({ pageName}) => {
    const Nevigate = useNavigate()
    return (
        <div className='page-header-sec'>
            <h1 className='page-header-name'>{pageName}</h1>
            <div className='page-header-para'><a onClick={() => Nevigate('/')}>Home</a>	&gt; {pageName}</div>
            <div className='page-header-flower'>
                <img src={pageHeaderFlower} alt='flower' />
            </div>
            <div className='page-header-circle'>
                <img src={pageHeaderCircle} alt='circle' />
            </div>
            <div className='page-header-image3'>
                <img src={pageHeaderImg3} alt='circle' />
            </div>
        </div>
    )
}

export default PageHeader;

import React from 'react'
import '../../styles/sec-header.css'
import flowerImg from '../../images/flower.png'
const SecHeader = ({title,heading,para}) => {
    return (
        <div className='home-sec-two-data heading'>
            <div><img src={flowerImg} />{title}</div>
            <h1>{heading}</h1>
            <p>{para}</p>
        </div>
    )
}

export default SecHeader

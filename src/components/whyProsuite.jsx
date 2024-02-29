import React from 'react'
import "../styles/whyProsuite.css";
import whyProsuiteData from './Data'

const whyProsuite = () => {
  const whyProsuite1 = whyProsuiteData.map(reason =>{
    return(
      <div className='card'>
      <img className="img" src={reason.image} alt="prosuite Web Icon"  />
      <h2 className="title">{reason.title}</h2>
      <p className="description">{reason.description}</p>
 </div>
    )
  })

  return(
    <div className='container'>
      <div className='head'>
      <div className='heading'>Why Prosuite?</div>
      </div>
     <div className='container1'>
      {whyProsuite1 }
     </div>
     </div>
      )
    }

export default whyProsuite
import React from 'react'
import "../styles/ourSolutions.css";
import {solutionsList} from './Data'

import { Link } from "react-router-dom";

const OurSolutions = () => {
 const solutions = solutionsList.map(solution =>{
  return (
    <div className='card-solutions'>
    <h2 className="card-title">{solution.title}</h2>
    <p className="card-description">{solution.description}</p>
    <Link to="#" className="btn btn-light">LEARN MORE</Link>
</div>
  )
})

return(
  <div>
    <div className='solutions-container'>
      <div className='heading'>Our Solutions</div>
     <div className='containerr'>
      {solutions}
     </div>
     </div>

<div className='contain'>
 <div className='content1'>
  <h2 className='text'>We'd love to show you how our solution works</h2>
  <div className='button'>
  <Link to="#" className="btn btn-light">REQUEST A DEMO</Link>
  </div>
 </div>
</div>
     </div>
      )
    }

export default OurSolutions
import React from "react"
import Home from './routes/Home'
import About from './routes/About'
import Contact from "./routes/Contact"
import Solutions from "./routes/Solutions"

import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/about"  element={<About />} />
       <Route path="/solutions" element={<Solutions />}/>
       <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}

export default App
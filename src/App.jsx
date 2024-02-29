import React from "react"
import Home from './routes/Home'
import About from './routes/About'
import Contact from "./routes/Contact"
import Solutions from "./routes/Solutions"

import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Routes>
       <Route path="/prosuite" element={<Home />}/>
       <Route path="/prosuite/about"  element={<About />} />
       <Route path="/prosuite/solutions" element={<Solutions />}/>
       <Route path="/prosuite/contact" element={<Contact />}/>
    </Routes>
  )
}

export default App
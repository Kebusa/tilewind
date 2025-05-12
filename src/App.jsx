import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FotballList from './components/FotballList'

function App() {
  return (<> 
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<FotballList/>}/>
            </Routes>
      </BrowserRouter>
  </>)
}

export default App
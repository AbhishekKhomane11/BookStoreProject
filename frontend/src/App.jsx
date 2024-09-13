import React from 'react'
import Home from './Home/Home'
import {Route, Routes} from 'react-router-dom'
import Books from './Books/Books'
import Signup from './components/Signup'
import Contact from './components/Contact'
function App() {
  return (
  <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Books' element={<Books/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </div>
  </>
  )
}

export default App
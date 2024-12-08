import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Alltasks from './pages/Alltasks'
import Importanttask from './pages/Importanttask'
import Complatedtask from './pages/Complatedtask'
import Incomplatedtask from './pages/Incomplatedtask'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
            <Route index element={<Alltasks />} />
            <Route path='/importanttask' element={<Importanttask />}/>
            <Route path='/complatedtask' element={<Complatedtask />}/>
            <Route path='/incomplatedtask' element={<Incomplatedtask />}/>
          </Route>
          <Route path='/signup' element={<SignUp/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
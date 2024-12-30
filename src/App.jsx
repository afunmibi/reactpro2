import React from 'react'
import {createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Mainlayout from './Layout/Mainlayout'
import Homepage from './Pages/Homepage'
import Jobspage from './Pages/Jobspage'
// import AddJob from './Pages/AddJob'
import NotFound from './Pages/NotFound'

const App = () => {
  const router = createBrowserRouter(
          createRoutesFromElements(
            
      <Route path='/' element={<Mainlayout/>}>
      <Route index element={<Homepage />} />
      <Route path='/jobs' element={<Jobspage />} />
      {/* <Route path='/add-job' element={<AddJob />} /> */}
      <Route path='*' element={<NotFound />} />
      </Route>      
    )
  )
  return (
    <div> 
      <RouterProvider router={router}/>
  </div>  
  )
}

export default App
import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import JobPage from './pages/JobPage'; 
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout />}>
      <Route index element =  {<Home/>} />
      <Route path='/jobs' element =  {<JobPage/>} />
      <Route path='*' element =  {<NotFound/>} />
    </Route>
)
)
const App = () => {

  return <RouterProvider router={router} />

}

export default App

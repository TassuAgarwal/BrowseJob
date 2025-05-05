import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import JobPage from './pages/JobPage'; 
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HeroCard from './components/HeroCard'
// import JobListing from './components/JobListing'
// import ViewAll from './components/ViewAll'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout />}>
      <Route index element =  {<Home/>} />
      <Route path='/jobs' element =  {<JobPage/>} />
    </Route>
)
)
const App = () => {

  return <RouterProvider router={router} />


  
  // (

  //   <>

  //     <Navbar />
  //     <Hero />
  //     <HeroCard />
  //     <JobListing />
  //     <ViewAll />

  //   </>

  // )
}

export default App

import React from 'react'
import Hero from '../Components/Hero'
import Homecards from '../Components/Homecards'
import JobsListing from '../Components/JobsListing'
import ViewAllJobs from '../Components/ViewAllJobs'

const Homepage = () => {
  return (
    <div>
        <Hero />
        <Homecards/>
        <JobsListing isHome={true}/>
        <ViewAllJobs/>
    </div>
  )
}

export default Homepage
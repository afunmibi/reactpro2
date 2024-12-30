import React from 'react'
import JobsListing from '../Components/JobsListing'

const Jobspage = ({jobs}) => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobsListing />
    </section>
  )
}

export default Jobspage
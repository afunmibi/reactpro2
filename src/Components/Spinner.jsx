import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({loading}) => {
    const override= {
        display: "block",
        margin: "100px auto",
        // borderColor: "red",
      };
  return (
    <ClipLoader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={150}
        
      />
  )
}

export default Spinner
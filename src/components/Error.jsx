import React from 'react'
import {useRouteError, useNavigate} from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
  return (
    <div className="jobdetails">
        <h3> an error ocurred. </h3>
        <p>{error.message}</p>
        <button onClick={()=>navigate('/')}>Go to home page</button>

    </div>
  )
}

export default Error
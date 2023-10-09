import React from 'react'
import { useNavigate} from 'react-router-dom'
function Page404() {
  let navigateToHome = useNavigate();
  return (
    <div className='Page404'>
      <button className='goHomeBtn' onClick={(e)=>navigateToHome('/')}>Go Home</button>
    </div>
  )
}

export default Page404

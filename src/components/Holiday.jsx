import React from 'react'

function Holiday({salah:{holiday}}) {
  return (
    <div className='font-medium text-lg text-right pr-5 italic'>
      Islamic Holiday : <span className='text-blue-900'>{`${holiday?holiday:'No Holiday Today'}`}</span>
    </div>
  )
}

export default Holiday

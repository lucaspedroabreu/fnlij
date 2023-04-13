import Image from 'next/image'
import React from 'react'

function Logo(props) {
  let newClasses = props.className
  if(!newClasses) {
    newClasses = ''
  }

  return (
    <div className={`logoContainer w-full ${newClasses}`}>
        <Image src="/logo-icon.png" alt='FNLIJ' layout='fill' className='logo' />
    </div>
  )
}

export default Logo
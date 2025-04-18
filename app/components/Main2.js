import React from 'react'
import Word from './Word'

const Main2 = () => {
  return (
    <div className= 'flex items-center justify-center  w-full h-screen'>
        <div className='font-bold font-serif text-9xl'>
        <Word tags={[{ name: "L", href: "/" },
            { name: "L Par Charo", href: "/" },
            { name: "Fuck You", href: "/" },
            
            ]} />
        </div>
      
    </div>
  )
}

export default Main2

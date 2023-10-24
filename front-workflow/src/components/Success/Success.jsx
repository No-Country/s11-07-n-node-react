import React, { useState } from 'react'
import style from "./Success.module.css"

const Success = ({comment="Success"}) => {
  const [show,setShow] = useState(true)
  return (
    <div className='relative'>
      <div className={`bg-white border border-black p-4 w-52 absolute text-center left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl ${show ? "": "hidden"}`}>
          <p className='mb-4 text-[#41BCAC] break-words pt-2  text-3xl'>{comment}</p>
          <div className={style.success}>
          </div>
          <button className=' text-white px-2 bg-[#41BCAC] rounded-[100%] absolute right-2 top-2' onClick={()=>setShow(!show)}>X</button>
      </div>
    </div>
  )
}

export default Success
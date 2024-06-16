import React from 'react'
import Button from './Button'
const list=["All","Music","computer Programming","News","cricket","comedy","Movies","React js","Namastey","Horror","Arjit singh"]
const ButtonList = () => {
  return (
    <div className='flex  pb-4'>
      {list.map((item, index) => <Button key={index} label={item} />)}
    </div>
  )
}

export default ButtonList
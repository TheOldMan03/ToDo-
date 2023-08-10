//This is to select which part of the To Do "App" you want to select
import React from 'react'
import './Selector.css'

const Selector = ({text,click}) => {
  return (
    <div className='Button-Area'>
      <button className='buttonStyle' onClick={click}>{text}</button>
    {/* I need to use routers and links to route the page without reloading the website */}
    {/* For now I will do it later once the UI is completed */}

    </div>
  )
}

export default Selector

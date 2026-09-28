import React from 'react'
import { useState } from 'react'

const InputL = () => {
    const [input, setInput] = useState("Hi")
  return (
    <>  
        <h3>Type in this text box and the head element under it changes dynamically</h3>
        <input type="text" style={{width:300, height:30, fontSize:16}} onChange={()=>{setInput(event.target.value)}} />
        <h4>{input}</h4>
    </>
  )
}

export default InputL
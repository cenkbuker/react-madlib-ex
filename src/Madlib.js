import React, { useState } from 'react'
import MadlibForm from './MadlibForm'
import Text from './Text'
import uuid from 'react-uuid';
import './Madlib.css'

function Madlib() {
    const INITIAL_STATE = [{
        noun :'',
        noun2 :'',
        adjective:'',
        color:'',
        submitted: false
    }]
    const [text, setText] = useState(INITIAL_STATE)
    const form = (noun, noun2, adjective, color, submitted)=>{
        setText(text => [{noun, noun2, adjective, color, submitted}])
    }
  return (
    <div>
        <h3 className='center'>Madlibs!</h3>
       {!text[0].submitted && <MadlibForm className="center" form={form}/>}
        {text[0].submitted &&text.map(({noun,noun2,adjective,color}) =><Text key={uuid()} noun={noun} noun2={noun2} adjective={adjective} color={color}/>)}
    </div>
  )
}

export default Madlib
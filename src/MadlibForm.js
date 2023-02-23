import React, { useState } from 'react'

function MadlibForm({form}) {
    const INITIAL_STATE = {
        noun :'',
        noun2 :'',
        adjective:'',
        color:'',
        submitted: null
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData(formData=>({
            ...formData,
            [name]: value,
            submitted: true
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        form(formData.noun, formData.noun2, formData.adjective, formData.color,formData.submitted)
        
    }
    return (
    <form className='center' onSubmit={handleSubmit}>
        <input className='input' type="text" name='noun' placeholder='noun' onChange={handleChange} value={formData.noun}/>
        <input className='input' type="text" name='noun2' placeholder='noun2' onChange={handleChange} value={formData.noun2}/>
        <input className='input' type="text" name='adjective' placeholder='adjective' onChange={handleChange} value={formData.adjective}/>
        <input className='input' type="text" name='color' placeholder='color' onChange={handleChange} value={formData.color}/>
        <button className='input'>Get Story!</button>
        </form>
  )
}

export default MadlibForm
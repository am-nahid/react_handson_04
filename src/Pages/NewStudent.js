import React, { useContext } from 'react'
import PageHeader from './Header'
import { useNavigate } from 'react-router-dom'
import store from './StoreComp'
import '../App.css'


function NewStudent() {
  const ContextData = useContext(store)
  const Navi= useNavigate()
  const NewObj = {
    name: '',
    Age: '',
    Course: '',
    Batch: ''
  }

  const HandleChange=(e)=>{
    NewObj[e.target.name]=e.target.value
    console.log(NewObj);
  }

  const handleSubmit =()=>{
    ContextData.entries.push(NewObj)
    console.log(ContextData);
    Navi(-1)
    // Navi('/students')

  }


  return (
    <div>
        <PageHeader/>

        <div>
      <h1>New student</h1>
      
      <div className='inputCont'>
        <div className='subContainer'>
      <input className='myInput' name='name' type='text' placeholder='enter name' onChange={HandleChange} />
      <input className='myInput' name='Age' type='text' placeholder='enter Age' onChange={HandleChange} />
      </div>
      <div className='subContainer'>
      <input className='myInput' name='Course' type='text' placeholder='enter Course' onChange={HandleChange} />
      <input className='myInput' name='Batch' type='text' placeholder='enter Batch' onChange={HandleChange} />
      </div>
      </div>
      <div className='updateBut'>
        <button className='updateButton' onClick={()=>Navi('/students')}>Cancel</button>
        <button className='updateButton' onClick={handleSubmit}>Submit</button>
      </div>
    </div>


   

    </div>

    
  
  )
  }

export default NewStudent

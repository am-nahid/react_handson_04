import React, { useContext } from 'react'
import PageHeader from './Header'
import store from './StoreComp';
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';

function EditStudent() {
    const Context = useContext(store)
    // console.log(Context);
    const Navi = useNavigate()
    const index=useLocation().state.data
    console.log(index);

    const updateObj = {
      name: Context.entries[index].name,
      Age: Context.entries[index].Age,
      Course: Context.entries[index].Course,
      Batch: Context.entries[index].Batch
    }

    const HandleChange=(e)=>{
      updateObj[e.target.name] = e.target.value
        // console.log(e.target.value);
    }

    const handleupdate=()=>{
      Context.entries[index]= updateObj
      Navi(-1)
    }

  return (
    <div>
        <PageHeader/>
        

       
        <div >
      <h1>Edit Student</h1>

      <div className='inputCont'>
        <div className='subContainer'>
     
      <input className='myInput' name='name' type='text' onChange={HandleChange} placeholder={Context.entries[index].name}/>
      <input className='myInput' name='Age' type='text' onChange={HandleChange} placeholder={Context.entries[index].Age}/>
      </div>
      <div className='subContainer'>
      <input className='myInput' name='Course' type='text' onChange={HandleChange} placeholder={Context.entries[index].Course}/>
      <input className='myInput' name='Batch' type='text' onChange={HandleChange} placeholder={Context.entries[index].Batch}/>
      </div>
      </div>
      <div className='updateBut'>
      <button className='updateButton' onClick={()=>Navi('/students')} >Cancel</button>
        <button className='updateButton' onClick={handleupdate}>Update</button>
      </div>
      </div>
   

    </div>
  )
}

export default EditStudent

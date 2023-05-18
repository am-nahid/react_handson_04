import React, { useContext } from "react";
import PageHeader from "./Header";
import { Link, useNavigate } from "react-router-dom"
import store from "./StoreComp";

const Students = () => {
  const ContextData = useContext(store)
  // console.log(ContextData);
  const Navigate = useNavigate();


  return (
    <>
      <PageHeader />
      <h1>Students Details</h1>
      <button onClick={()=>{Navigate('/new-student')}} className="button">Add new student</button>
      <div className="tableStyle">
        <table>
         <thead>
          <tr  className="table-head">
            
              <td>Name</td>
              <td>Age</td>
              <td>Course</td>
              <td>Batch</td>
              <td>Change</td>
           
          </tr>
          </thead>
          <tbody>
            {
              ContextData.entries.map((item,index)=>{
                return(
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                  <td><Link to={'/edit-student'} state={{data: index}}>edit</Link></td>
                </tr>
                )
              })
            }
          </tbody>
         
        </table>
      </div>
    </>
  );
};

export default Students;

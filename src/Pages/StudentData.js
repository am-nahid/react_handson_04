import React from "react";
import PageHeader from "./Header";

const Students = () => {
  return (
    <>
      <PageHeader />
      <h1>Students Details</h1>
      <button className="button">Add new student</button>
      <div className="tableStyle">
        <table>
          <tr>
            
              <td>Name</td>
              <td>Age</td>
              <td>Course</td>
              <td>Batch</td>
              <td>Change</td>
           
          </tr>
          <tr>
            <td>John</td>
            <td>24</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Doe</td>
            <td>25</td>
            <td>MERN</td>
            <td>November</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Biden</td>
            <td>26</td>
            <td>MERN</td>
            <td>March</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Barar</td>
            <td>22</td>
            <td>MERN</td>
            <td>January</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Christ</td>
            <td>23</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Elent</td>
            <td>24</td>
            <td>MERN</td>
            <td>November</td>
            <td>Edit</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Students;

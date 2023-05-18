import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Students from "./Pages/StudentData";
import PageNotFound from "./Pages/PageNotFound";
import store from "./Pages/StoreComp";
import EditStudent from "./Pages/EditStudent";
import NewStudent from "./Pages/NewStudent";

function RouterComponent() {
  const [data, setData] = useState([
    { name: "John", Age: "23", Course: "MERN", Batch: "jan" },
    { name: "Ragnar", Age: "26", Course: "MERN", Batch: "oct" },
    { name: "Chandler", Age: "27", Course: "MERN", Batch: "sept" },
    { name: "Joey", Age: "28", Course: "MERN", Batch: "jan" },
    { name: "Abdul", Age: "23", Course: "MERN", Batch: "jan" },
    { name: "Biden", Age: "26", Course: "MERN", Batch: "oct" },
    { name: "Bing", Age: "27", Course: "MERN", Batch: "oct" },
    { name: "Ross", Age: "28", Course: "MERN", Batch: "sept" },
    { name: "Boney", Age: "23", Course: "MERN", Batch: "jan" },
    { name: "Raju", Age: "26", Course: "MERN", Batch: "oct" },
    { name: "Phoebe", Age: "27", Course: "MERN", Batch: "sept" },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route
          path="/students"
          element={
            <store.Provider value={{ entries: data, enteriesFunc: setData }}>
              <Students />
            </store.Provider>
          }
        />
        <Route
          path="/new-student"
          element={
            <store.Provider value={{ entries: data, enteriesFunc: setData }}>
              <NewStudent />
            </store.Provider>
          }
        />
        <Route
          path="/edit-student"
          element={
            <store.Provider value={{ entries: data, enteriesFunc: setData }}>
              <EditStudent />
            </store.Provider>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;

// {/* <Route path="/new-student" element={<NewStudent />} /> */}

//   {/* <Route
//           path="/student-details/:studentId"
//           element={<StudentsDetails />}
//         /> */}

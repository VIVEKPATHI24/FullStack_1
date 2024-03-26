// import { useState } from "react";
import "./App.css";
import { CardComp } from "./CardComponent/CardComp";
import { CardFlip } from "./CardFlip/CardFlip";
import { UseStateTest } from "./UseStateTest/UseStateTest";
import { OnChangeTest } from "./OnChangeTest/OnChangeTest";
import { Array } from "./ArraysTest/Array";
import { ArrayObjects } from "./ArrayObjectsTest/ArrayObjects";
import { Customers } from "./Customers/GetAllCustomers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddCustomers } from "./Customers/AddCustomers";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <CardFlip/> */}
      {/* <CardComp/>  */}
      {/* <UseStateTest/> */}
      {/* <OnChangeTest/> */}
      {/* <Array/> */}
      {/* <ArrayObjects/> */}
      {/* <CustomerService/> */}
      <BrowserRouter>
        <Routes>
        {/* http://localhost:5173/ */}
        <Route path='/' element={<CardComp />}></Route>
        {/* http://localhost:5173/getCustomer */}
          <Route path='/getCustomer' element={<Customers />}></Route>
          {/* http://localhost:5173/createCustomer */}
          <Route path='/createCustomer' element = {<AddCustomers/>} ></Route>
          {/* http://localhost:5173/patchCustomer */}
          <Route path='/patchCustomer/:id' element = {<AddCustomers/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

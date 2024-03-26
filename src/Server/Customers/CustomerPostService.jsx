import React from 'react'
import axios from 'axios';

const basicUrl = "http://localhost:8082/Intro/";
const createCustomerspath = "createCustomer";

export const createCustomer = (cust) => {
   
    const createCustomer = axios.post(basicUrl+createCustomerspath, cust);
    console.log(createCustomer);
    return createCustomer;
  
}

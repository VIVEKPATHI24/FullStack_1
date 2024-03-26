import axios from "axios";


const basicUrl = "http://localhost:8082/Intro/";
const getCustomerspath = "getCustomer";
const createCustomerspath = "createCustomer";
const deleteCustomerpath = "deleteCustomer/";
const updateCustomerspath = "patchCustomer/";
const getCustomersByIdpath = "getCustomerById/";

export const getAllCustomers =()=> axios.get(basicUrl + getCustomerspath);

export const getCustomerById = (id) => axios.get(basicUrl + getCustomersByIdpath + id );

export const createCustomer = (customer)=> axios.post(basicUrl + createCustomerspath, customer);

export const updateCustomer = (id, customer) => axios.patch(basicUrl + updateCustomerspath + id, customer);

export const deleteCustomer = (id) => axios.delete(basicUrl + deleteCustomerpath +id);






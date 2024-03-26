import React, {useState, useEffect} from 'react'
import {getAllCustomers,deleteCustomer, updateCustomer} from '../Server/Customers/CustomerService';
import { useNavigate } from 'react-router-dom';

export const Customers = () => {

    const [customer, setCustomer] = useState([]);
    const navigate = useNavigate();

    function displayAllCustomers(){
        getAllCustomers().then((response) =>{
            setCustomer(response.data);
            console.log("data - "+response.data);
        }).catch(error =>{
            console.error(error);
        })
    }

    useEffect(() =>{
        displayAllCustomers();

    },[]        
    )

    function AddNewCustomer(){
        navigate('/createCustomer');
    }

    // const handleDelete=async(id)=>{
    //     const resp = await deleteCustomer(id);
    //     if(resp.status===200){
    //         const updatedCustomers = customer.filter((currentCustomer)=>currentCustomer.id!==id)
    //         setCustomer(updatedCustomers)
    //     }
    // }

    function handleDelete(id){
        deleteCustomer(id).then((response) =>{
            displayAllCustomers();
            console.log("length of customers - " +displayAllCustomers.length);
        }).catch(error =>{
            console.log(error);
        })
    }

    const handleUpdate = async(id) => {
        console.log("id selected is - " + id);
        navigate(`/patchCustomer/ ${id}`);
    }

  return (
    <div className = 'container ' >
        <h2 className = 'text-center'>List of Customers</h2>
        <button className='btn btn-primary mb-2' onClick={AddNewCustomer}> Add Customer</button>
        <table className = 'table table-striped'>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Customer FirstName</th>
                    <th>Customer LastName</th>
                    <th>Customer Address</th>
                    <th>Customer Phone</th>
                </tr>
            </thead>

            <tbody>
                {
                    customer.map(cust => 
                        <tr key={cust.id}>
                            <td>{cust.id}</td>
                            <td>{cust.firstName}</td>
                            <td>{cust.lastName}</td>
                            <td>{cust.address}</td>
                            <td>{cust.phone}</td>
                            <td><button onClick={()=>handleUpdate(cust.id)}>Update</button></td>
                            <td><button onClick={()=>handleDelete(cust.id)}>Delete</button></td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

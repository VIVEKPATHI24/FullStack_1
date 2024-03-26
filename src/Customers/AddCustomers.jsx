import React, { useEffect, useState } from "react";
import { createCustomer, getCustomerById, updateCustomer } from "../Server/Customers/CustomerService";
import { useNavigate, useParams } from "react-router-dom";

export const AddCustomers = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });

  const {id} = useParams();

  const nav = useNavigate();

  useEffect(()=>{
    if(id){
        getCustomerById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setPhone(response.data.phone);
            setAdress(response.data.address);
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

  }, [id] )

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleAddress(e) {
    setAdress(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const customer = { firstName, lastName, phone, address };
      console.log(customer);

        if(id){
            updateCustomer(id,customer).then((response) => {
                console.log("update date - " + response.data);
                nav("/getCustomer");
            }).catch(error =>{
                console.log(error);
            })
        }
        else{
            createCustomer(customer).then((response) => {
                console.log(response.data);
                nav("/getCustomer");
              }).catch(error =>{
                console.log(error);
            })
        }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = {...errors};

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "first name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "last name is required";
      valid = false;
    }

    if (address.trim()) {
      errorsCopy.address = "";
    } else {
      errorsCopy.address = "address is required";
      valid = false;
    }

    if (phone.trim()) {
      errorsCopy.phone = "";
    } else {
      errorsCopy.phone = "phone is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle(){

    if(id){
        return <h2 className="text-center"> Update Customer </h2>
    }
    else{
        return <h2 className="text-center"> Create Customer </h2>
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          {
            pageTitle()
          }
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> First Name </label>
                <input
                  type="text"
                  placeholder="enter first name here"
                  name="firstname"
                  value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''} ` }
                  onChange={handleFirstName}
                ></input>
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label"> Last Name </label>
                <input
                  type="text"
                  placeholder="enter last name here"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''} ` }
                  onChange={handleLastName}
                ></input>
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label"> Phone </label>
                <input
                  type="text"
                  placeholder="enter phone number here"
                  name="phone"
                  value={phone}
                  className={`form-control ${errors.phone ? 'is-invalid' : ''} ` }
                  onChange={handlePhone}
                  required
                ></input>
                {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label"> Address </label>
                <input
                  type="text"
                  placeholder="enter Address here"
                  name="Address"
                  value={address}
                  className={`form-control ${errors.address ? 'is-invalid' : ''} ` }
                  onChange={handleAddress}
                ></input>
                {errors.address && <div className='invalid-feedback'>{errors.address}</div>}
              </div>
              <button className="btn btn-success" onClick={handleSubmit}>
               
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

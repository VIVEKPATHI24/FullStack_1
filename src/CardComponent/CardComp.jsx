import image from "./vivek.png"
import { getAllCustomers } from "../Server/Customers/CustomerService"
import { useNavigate } from 'react-router-dom';

export const CardComp =()=>{

    const navigate = useNavigate();
    function handleGetAllCustomers(){
        navigate('/getCustomer');
    }

    return(
        <div className = 'card-container'>
            <div className = 'card'>
             <img  className = 'card-image' src= {image} alt="picture" 
                    style={{ width: '200px', height: '150px' }}></img>
             <h3 className = 'cardtitle' >Vivek card</h3>
             <p className = 'cardtext'>Hello this is vivek</p>
             </div>
             
             <button className='btn btn-primary mb-2' onClick= {()=>handleGetAllCustomers()}> View all Customers</button>
             
        </div>
    )
}

import {useState} from "react";
import "./AddContact.css";
import { Link } from "react-router-dom";
const AddContact =({submitHandler})=>{

const [contact,setContact]=useState({name:"",email:""});


const changeHandler=(e)=>{
   
    setContact({...contact,[e.target.name]: e.target.value})
}

const submitFormHandler=(e)=>{
    if(!contact.name || !contact.email){
        alert("all fields are mandatory !")
        return ;
    }
    e.preventDefault();
    submitHandler(contact);
    setContact({name:"",email:""});

    
   
}

    return(
        <form onSubmit={submitFormHandler}>
            <div>
        <Link to="/">
            <button>Contacts</button>
        </Link>
       </div>
            <div className="formcontrol">
                <label>name</label>
                <input 
                type="text"
                name="name"
                value={contact.name}
                onChange={changeHandler} />
            </div>
            <div className="formcontrol">
                <label>email</label>
                <input 
                type="email"
                name="email"
                value={contact.email}
                onChange={changeHandler} />
            </div>
            <button type="submit">Add contact</button>
        </form>
    )
}

export default AddContact;
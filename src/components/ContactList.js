import {Link} from "react-router-dom"
import "./ContactList.css";
import Contact from "./contact"
const ContactList =({contacts,onDelete})=>{

    return(
      
   <section className="contactlist">



<div>
<h2>Contacts</h2>
<Link to="/add">
    <button>add</button>
</Link>
</div>

     
      {contacts.map((contact)=>{
       return(  
       <Contact contact={contact}onDelete={onDelete}/>)
      })}



   </section>
       
      
    )
}

export default ContactList;
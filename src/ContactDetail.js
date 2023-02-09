import {Link} from "react-router-dom"

const ContactDetail =({location})=>{
    const {contact} =location.state;
    
    return(

        <div>
            <h3>name:{contact.name}</h3>
            <h3>email:{contact.email}</h3>
            <Link to="/">go to home page</Link>
        </div>
    )
}


export default ContactDetail;
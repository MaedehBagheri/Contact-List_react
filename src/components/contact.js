import { Link } from "react-router-dom";

const Contact =({contact , onDelete})=>{
    const {name,email,id} =contact;

    console.log(contact)
    return(
    <>
        <Link to={{state:{contact},pathname:`user/${id}`}}>
        <div key={id} className="item">
<p>name:{name}</p>
       <p>email:{email}</p>
   </div>
<button onClick={()=>onDelete(id)}>delete</button>
</Link>
       </>
    )
}

export default Contact;
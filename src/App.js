
import { useEffect, useState } from "react";
import "./App.css"
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList"
import ContactDetail from "./ContactDetail";
import { Route, Routes ,BrowserRouter } from 'react-router-dom';

const App =()=>{
    const[contacts,setContacts] =useState([]);


    const submitHandler=(contact)=>{
        setContacts([...contacts,{id:Math.ceil(Math.random()*100),...contact}])

    }
    
const removeHandler =(id) =>{
   const filteredContact = contacts.filter((c) => c.id !== id);
   setContacts(filteredContact);
}

useEffect(()=>{
  const savedContacts=  JSON.parse(localStorage.getItem("contacts"));
  if(savedContacts) setContacts(savedContacts)
},[])

useEffect(()=>{
    localStorage.setItem("contacts" ,JSON.stringify(contacts))
},[contacts])



    return(
                                                                                                                                                                         
    <main className="App">
<h1>Contact App</h1>

   
<BrowserRouter>
        <Routes>
        <Route path="/user/:id" element={<ContactDetail />} />
    <Route path="/add" element={<AddContact submitHandler={submitHandler} />} />

    <Route path="/" exact element={ <ContactList contacts={contacts} onDelete={removeHandler}/>} />
        </Routes>
</BrowserRouter>
  
    </main>
   
    
    )                                                                                                                                                                                        
}

export default App;

import React , {useState} from "react";
import "./Form.css";

function Form() {

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the page from refreshing
    console.log({ name, email, password });
  }

  
  return (
    <form>
      <label>Name :</label>
      <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>

      <label>Email :</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

      <label>password :</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button type="submit">Submit From</button>
    </form>
  );
}

export default Form;

import './Signup.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {navigate,useNavigate} from 'react-router-dom';
import axios from "axios";
const Signup=()=>{
            const [getForm,setForm]=useState({
              firstname:'',
              lastname:'', 
              email:'',
              password:''
            });
            const navigate = useNavigate();
            const emptyValidation=(value)=>{
              if(value){
                return true;
              }
              else{
                return false;
              }
            }
            const onChangeHandler=(event)=>{
                 setForm({...getForm,[event.target.name]:event.target.value})
            }
            const onSubmitHandler=(event)=>{
              event.preventDefault();
              if(!emptyValidation(getForm.firstname)){
                alert('firstname cannot be empty');
                return;
              }
              if(!emptyValidation(getForm.lastname)){
                alert('lastname cannot be empty');
                return;
              }
              if(!emptyValidation(getForm.email)){
                alert('email cannot be empty');
                return;
              }
              if(!emptyValidation(getForm.password)){
                alert('password cannot be empty');
                return;
              }
               axios.post('http://localhost:3000/registration',getForm).then((result)=>{
                         console.log(result);
                         navigate('/login');
               }).catch((error)=>{
                        console.log(error);
               })
            }
    return(
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
<nav className="navbar navbar-light bg-light">
<a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
</nav>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item vtwo1">
              <Link className="nav-link" to="/login" id="vone1">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className='vseven1'>Signup</h1>
      <div className="vsix1">
        <label className="text-center vfour1">First Name</label>
        <input onChange={onChangeHandler} type="text" className="form-control vthree1" placeholder="First name" aria-label="Recipient's username" aria-describedby="basic-addon2" name="firstname"/><br/>
        <label className="text-center vfour1">Last Name</label>
        <input onChange={onChangeHandler} type="text" className="form-control vthree1" placeholder="Last name" aria-label="Recipient's username" aria-describedby="basic-addon2" name="lastname"/><br/>
        <label className="text-center vfour1">Email address</label>
        <input onChange={onChangeHandler} type="gmail" className="form-control vthree1" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="basic-addon2" name="email"/><br/>
        <label className="text-center vfour1">Password</label>
        <input onChange={onChangeHandler} type="text" className="form-control vthree1" placeholder="Enter password" aria-label="Recipient's username" aria-describedby="basic-addon2" name="password"/><br/>
        <button className="btn btn-info vfive1" type="submit" onClick={onSubmitHandler}>SIGN UP</button>       
      </div><br/>
        </div>
    )
}
export default Signup;
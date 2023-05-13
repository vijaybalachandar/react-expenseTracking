import './Login.css';
import {useState} from 'react';
import {navigate,useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Login=()=>{
  const [getForm,setForm]=useState({
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
    if(!emptyValidation(getForm.email)){
      alert('email cannot be empty');
      return;
    }
    if(!emptyValidation(getForm.password)){
      alert('password cannot be empty');
      return;
    }
    axios.get(`http://localhost:3000/registration?email=${getForm.email}&password=${getForm.password}`).then((result)=>{
      console.log(result.data);
      if(result.data && result.data.length>0){
        sessionStorage.setItem('email',getForm.email);
        navigate('/expense');
      }else{
        alert("email and password is not found");
      }
})
}
    return(
        <div>
          <nav className="navbar justify-align-center navbar-expand-lg navbar-light bg-light">
<nav className="navbar navbar-light bg-light">
<a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
</nav>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item vone2">
              <Link className="nav-link" to="/" id="vtwo2">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="vfive2">
        <h1 className="text-center">Log in</h1><br/>
        <input onChange={onChangeHandler} type="text" className="form-control vthree2" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" name="email"/><br/>
        <input onChange={onChangeHandler} type="password" className="form-control vthree2" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" name="password"/><br/>
        <button onClick={onSubmitHandler} className="btn btn-success vfour2" type="submit">SIGN UP</button>
    </div>
        </div>
    )
}
export default Login;
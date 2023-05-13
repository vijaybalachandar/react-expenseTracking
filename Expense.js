import './Expense.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {navigate,useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Expense=()=>{
  const clearData=()=>{
    localStorage.removeItem('Employeeid');
    localStorage.removeItem('Expensetitle');
    localStorage.removeItem('Expenseamount');
    localStorage.removeItem('Paidto');
    localStorage.removeItem('Paidby');
    localStorage.removeItem('Expensedate');
  }
  const [getForm,setForm]=useState({
    Employeeid:'',
    Expensetitle:'',
    Expenseamount:'',
    Paidto:'',
    Paidby:'',
    Expensedate:''
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
    if(!emptyValidation(getForm.Employeeid)){
      alert('Employeeid cannot be empty');
      return;
    }
    if(!emptyValidation(getForm.Expensetitle)){
      alert('Expensetitle cannot be empty');
      return;
    }
     if(!emptyValidation(getForm.Expenseamount)){
      alert('Expenseamount cannot be empty');
      return;
    }
     if(!emptyValidation(getForm.Paidto)){
      alert('Paidto cannot be empty');
      return;
    }
     if(!emptyValidation(getForm.Paidby)){
      alert('Paidby cannot be empty');
      return;
    }
     if(!emptyValidation(getForm.Expensedate)){
      alert('Expensedate cannot be empty');
      return;
    }
    axios.post('http://localhost:3000/expense',getForm).then((result)=>{
      console.log(result);
      navigate('/table');
}).catch((error)=>{
     console.log(error);
})
}
    return(
        <div>
          <nav className="navbar justify-align-center navbar-expand-lg navbar-light bg-light">
<nav className="navbar navbar-light bg-light">
<i className="fa fa-handshake-o navbar-brand" aria-hidden="true"/>
</nav>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item vfour4">
              <Link className="nav-link" to="/about"><span className="vnine4">About</span></Link>
            </li>
            <li className="nav-item vfour4">
              <Link className="nav-link" to="/table"><span className="vnine4">Table</span></Link>
            </li>
            <li className="nav-item vfour4">
              <Link className="nav-link" onClick={clearData} to="/"><span className="vnine4">Logout</span></Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1 id="vone4">Expense</h1>
      <div className='vtwelve4'>
     <div>
        <lable className="vfourteen4" for="Employee Id">Employee Id:</lable>
        <input onChange={onChangeHandler} id="vtwo4" type="tel" name="Employeeid" required/>
        </div><br/ >
        <div>
            <lable className="vfourteen4" for="Expense Title">Expense Title:</lable>
        <input onChange={onChangeHandler} id="vthree4" type="text" name="Expensetitle" required/>
        </div><br/>
        <div>
            <lable className="vfourteen4" for="Expense Amount">Expense Amount:</lable>
             <input onChange={onChangeHandler} type="number" name="Expenseamount" className="vten4" required/>
        </div><br/>
        <div>
            <lable className="vfourteen4" for="Paid To">Paid To:</lable>
            <input onChange={onChangeHandler} id="vfive4" type="text" name="Paidto" required/>
        </div><br/>
        <div>
            <lable className="vfourteen4" for="Paid By">Paid By:</lable>
            <select onChange={onChangeHandler}  className="custom-select mr-sm-2 veleven4" id="inlineFormCustomSelect" name="Paidby">
              <option selected>Select</option>
              <option value="1">Cash</option>
              <option value="2">Card</option>
              <option value="3">UPI</option>
              <option value="4">Bank Transfer</option>
             </select>
        </div><br/>
        <div>
            <lable className="vfourteen4" for="Expense Date">Expense Date</lable>
            <input onChange={onChangeHandler} id="veight4" type="date" name="Expensedate"  required/>
        </div><br/>
        <button onClick={onSubmitHandler} className="btn3 btn-success vthirteen4" type="submit">ADD EXPENSE</button>
      </div>
        </div>
    )
}
export default Expense;
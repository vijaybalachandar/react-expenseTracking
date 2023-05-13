import './Table.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const Table=()=>{
  const [getForm,setForm]=useState({
    Employeeid:'',
    Expensetitle:'',
    Expenseamount:'',
    Paidto:'',
    Paidby:'',
    Expensedate:''
  });
  const[getList,setList] = useState ([]);
  const clearData=()=>{
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
       const getListAPI=()=>{
        axios.get(`http://localhost:3000/expense`).then((result)=>{
          setList(result.data);
        }).catch(()=>{

        })
       }
       useEffect(()=>{
        getListAPI();
       },[])  
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
            <li className="nav-item vfour5">
              <Link className="nav-link" to="/about"><span className='red'>About</span></Link>
            </li>
            <li className="nav-item vfour5">
                <Link className="nav-link" to="/expense"><span className='red'>Expense</span></Link>
              </li>
            <li className="nav-item vfour5">
              <Link className="nav-link" onClick={clearData} to="/"><span className='red'>Logout</span></Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
      <h1 id="vone5">Table</h1>
     <div>
        <lable for="Expense Date">Expense Date:</lable>
        <input id="vtwo5" type="date" name="Expense Date"/>
        </div><br/>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">SI NO</th>
              <th scope="col">Employee Id</th>
              <th scope="col">Expense Title</th>
              <th scope="col">Expense Amount</th>
              <th scope="col">Paid To</th>
              <th scope="col">Paid By</th>
              <th scope="col">Expense Date</th>
            </tr>
          </thead>
          <tbody>
          {
                        getList.map((obj,index)=>{
                            return ( <tr key={index}>
                              <th scope="row">{index+1}</th>
                              <td>{obj.Employeeid}</td>
                              <td>{obj.Expensetitle}</td>
                              <td>{obj.Expenseamount}</td>
                              <td>{obj.Paidto}</td>
                              <td>{obj.Paidby}</td>
                              <td>{obj.Expensedate}</td>
                              
                            </tr>)
                        })
                      }
          </tbody>
        </table>
      </div>
        </div>
    )
}
export default Table;
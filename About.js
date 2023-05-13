import './About.css';
import {Link} from 'react-router-dom';
import Budgettracking from '../assets/Budgettracking.jpg'
const About=()=>{
  const clearData=()=>{
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
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
            <li className="nav-item vfour3">
                <Link className="nav-link" to="/expense"><span className="vfive3">Expense</span></Link>
              </li>
            <li className="nav-item vfour3">
              <Link className="nav-link" to="/table"><span className="vfive3">Table</span></Link>
            </li>
            <li className="nav-item vfour3">
              <Link className="nav-link" onClick={clearData} to="/"><span className="vfive3">Log Out</span></Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="vone3">
        <img id="vtwo3" src={Budgettracking} alt=""/> 
        <p id="vthree3">Budget tracking is the process of tracking expenses, receipts, and invoices so that a project can be completed within its allotted budget. Budget tracking can be done using budgeting and forecasting software. The best budgeting app is the one that best suits your personal finances. Each of the apps recommended above has features to help you avoid common budgeting mistakes and that can apply to a variety of money-managing styles and financial goals. Some banks and credit unions also offer budgeting and tracking tools within their own apps.</p>
      </div>
        </div>
    )
}
export default About;
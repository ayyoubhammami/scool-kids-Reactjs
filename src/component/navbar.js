import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import logo from '../Logo.png';
import bk1 from '../bk1.jpg';
class Nav extends Component{
    render(){
        return(
            <div>
                 <div className='container'>
                 <nav className="navbar navbar-expand-lg navbar-light  fixed-top " style={{background:' linear-gradient(to right, #FF0080, #FF8C00, #40E0D0'}}>
                
  <Link className="navbar-brand" to="#"><img src={logo} alt='logo' style={{ width:'150px',height:'70px',}}/> </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active" style={{marginLeft:'150px',fontFamily:'cursive',fontSize:'30px'}}>
        <Link className="nav-link" to="#">Home <span className="sr-only" >(current)</span></Link>
      </li>
      <li className="nav-item" style={{marginLeft:'50px',fontFamily:'cursive',fontSize:'30px'}}>
        <Link className="nav-link" to="#">About</Link>
      </li>
      <li className="nav-item" style={{marginLeft:'50px',fontFamily:'cursive',fontSize:'30px'}}>
        <Link className="nav-link" to="#">Contact</Link>
      </li>
      <li className="nav-item dropdown" style={{marginLeft:'450px',fontFamily:'cursive',fontSize:'30px'}}>
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="facebook.com">Sighn in</Link>
          <Link className="dropdown-item" to="#">Sighn up</Link>
          
        </div>
      </li>
    </ul>
  </div>
</nav>
                 </div>
            </div>
        );
    }
}
export default Nav;
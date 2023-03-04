import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./navbar.css";
import img from "../../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {



  const navigate = useNavigate()

  const clickToHome =()=> {
    return navigate("/")
  }

  const [clicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!clicked)
  }

  return (
    <header>

      <nav>
        <a href="">
          {/* <img src={img} alt="Hello New Customer" className="img-fluid"/> */}
          <p className='text-white fs-3'>Logo</p>
        </a>

        <div>
          <ul id="navUL" className={clicked ? "#navUL active" : "#navUL"}>

            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>

          </ul>
        </div>

        <div id="mobile">

          {
            <FontAwesomeIcon 
              icon={clicked ? faTimes : faBars} 
              className="text-white fs-2" 
              onClick={handleClick}
            />
          }

        </div>

      </nav>


    </header>
   
  );
}

export default Navbar;

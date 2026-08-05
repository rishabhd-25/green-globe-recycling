import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {


  return (

    <nav className="navbar">


      <NavLink
        to="/"
        className="logo"
      >

        <img
        src={logo}
        alt="Green Globe CE & Recycling"
        className="logo-icon"
        />

        


        <span>

          Green Globe CE & Recycling

        </span>


      </NavLink>




      <div className="nav-links">


        <NavLink

          to="/"

          className={({isActive}) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }

        >

          Home

        </NavLink>




        <NavLink

          to="/credentials"

          className={({isActive}) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }

        >

          Credentials

        </NavLink>



      </div>



    </nav>

  );

}


export default Navbar;
import { NavLink } from "react-router-dom";


function Navbar() {


  return (

    <nav className="navbar">


      <NavLink
        to="/"
        className="logo"
      >

        <span className="logo-icon">

          🌿

        </span>


        <span>

          Green Globe Recycling

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
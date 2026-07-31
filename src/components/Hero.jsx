import { useNavigate } from "react-router-dom";


function Hero() {


  const navigate = useNavigate();



  const scrollToOverview = () => {

    const section =
      document.getElementById("overview");


    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };



  return (

    <section className="hero">


      <div className="hero-overlay">


        <div className="hero-badge">

          🌿 Sustainable Recycling Solutions

        </div>



        <h1>

          Recovering Resources.
          <br />

          Building a Circular Future.

        </h1>



        <p>

          Green Globe Recycling transforms silicon-coated waste paper
          into valuable recovered wood pulp through responsible and
          sustainable recycling solutions.

        </p>



        <div className="hero-buttons">


          <button

            className="hero-button primary"

            onClick={scrollToOverview}

          >

            Explore Our Process

          </button>




          <button

            className="hero-button secondary"

            onClick={() => navigate("/credentials")}

          >

            View Credentials

          </button>



        </div>


      </div>




      <svg

        className="wave-divider"

        viewBox="0 0 1440 140"

        preserveAspectRatio="none"

      >

        <path

          fill="#fafbf7"

          d="
          M0,80
          C240,160
          480,0
          720,80
          C960,160
          1200,40
          1440,100
          L1440,140
          L0,140
          Z
          "

        />

      </svg>



    </section>

  );

}


export default Hero;
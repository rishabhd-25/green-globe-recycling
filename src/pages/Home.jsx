import Hero from "../components/Hero";
import specimenCertificate from "../assets/Specimen Recycling Certificate.png";
import CertificateViewer from "../components/CertificateViewer";

function Home() {
  return (
    <>
      <Hero />

      {/* COMPANY OVERVIEW */}

      <section id="overview" className="overview-section">

        <div className="overview-content">

          <span className="section-tag">
            COMPANY OVERVIEW
          </span>

          <h2>
            Recovering Value From
            Difficult Waste Streams
          </h2>

          <p>
            Green Globe Recycling specializes in recycling silicon-coated
            waste paper into reusable wood pulp through advanced and
            environmentally responsible processes. By recovering valuable
            fibers from industrial waste streams, we help businesses reduce
            landfill dependency while supporting a more circular economy.
          </p>

          <p>
            Through responsible processing, quality monitoring, and
            sustainable material recovery, we transform challenging waste
            into a valuable resource for the paper manufacturing industry.
          </p>

        </div>


        <div className="overview-image">

          <div className="image-placeholder">

            <span>
              🌱
            </span>

            <p>
              Company Image
            </p>

          </div>

        </div>

      </section>



      {/* WHAT WE DO */}

      <section className="what-we-do-section">

        <div className="section-heading">

          <span className="section-tag">
            WHAT WE DO
          </span>

          <h2>
            Sustainable Recycling Solutions
          </h2>

          <p>
            Transforming silicon-coated waste paper into valuable
            recovered wood pulp through a responsible circular process.
          </p>

        </div>


        <div className="recycling-showcase">


          <div className="process-card">

            <h3>
              Recycling Process
            </h3>

            <p>
              Our recycling process is designed to recover maximum fiber
              value while maintaining environmental responsibility.
            </p>


            <div className="process-list">

              <div>
                <span>01</span>
                <p>
                  Collection of silicon-coated waste paper
                </p>
              </div>


              <div>
                <span>02</span>
                <p>
                  Specialized processing and fiber recovery
                </p>
              </div>


              <div>
                <span>03</span>
                <p>
                  Quality testing of recovered wood pulp
                </p>
              </div>


              <div>
                <span>04</span>
                <p>
                  Returning recovered material into manufacturing
                </p>
              </div>

            </div>

          </div>



          <div className="certificate-showcase">

            <div className="certificate-preview-home">

                <CertificateViewer

                    image={specimenCertificate}

                    alt="Green Globe Recycling Certificate"

                />

            </div>


            <div className="certificate-description">

              <h3>
                Sustainability Certificate
              </h3>

              <p>
                Customers receive verified documentation confirming that
                their silicon-coated waste paper has been responsibly
                recycled and converted into reusable material.
              </p>

              <p>
                This certificate supports transparency throughout the
                recycling journey and demonstrates measurable commitment
                to circular resource management.
              </p>

            </div>

          </div>


        </div>

      </section>



      {/* MISSION */}

      <section className="mission-section">

        <div className="mission-box">

          <span className="section-tag light">
            OUR MISSION
          </span>

          <h2>
            Quality Recycling With Lasting Impact
          </h2>

          <p>
            Our mission is to provide dependable recycling solutions that
            maximize fiber recovery while minimizing environmental impact.
            We are committed to delivering quality, sustainability, and
            long-term value to every partner we serve.
          </p>

        </div>

      </section>



      {/* CONTACT */}

      <section className="contact-section">


        <div className="contact-container">


          <div className="contact-left">


            <span className="section-tag">
              CONTACT
            </span>


            <h2>
              Let's Build a More Sustainable Future
            </h2>


            <p>
              Partner with Green Globe Recycling to create responsible
              waste management solutions. Contact our team to discuss
              your recycling needs and explore how we can work together.
            </p>



            <div className="contact-item">
              <strong>
                Phone
              </strong>

              <span>
                +91 9867066766
              </span>

            </div>



            <div className="contact-item">

              <strong>
                Email
              </strong>

              <span>
                jatin@greenglobece.com
              </span>

            </div>



            <div className="contact-item">

              <strong>
                Address
              </strong>

              <span>
                Alpine Industrial Park, 176, Kamrej, Amboli,
                Surat, Gujarat 394150, India
              </span>

            </div>


          </div>


        </div>


      </section>


    </>
  );
}

export default Home;
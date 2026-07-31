import { useState } from "react";

import gpcbCertificate from "../assets/Gujarat Pollution Control Board.jpg";
import startupCertificate from "../assets/Startup India.jpg";
import cppriReport from "../assets/Test Report.jpg";

import CertificateViewer from "../components/CertificateViewer";


const certificates = [

  {
    id: "gpcb",

    tab: "Gujarat Pollution Control Board",

    title:
      "GPCB Authorized Recycling & Compliance Certificate",

    issuer:
      "Green Globe CE & Recycling LLP",

    date:
      "10th November 2025",

    expiration:
      "28th September 2030",

    image:
      gpcbCertificate,

    description:
      "This certificate confirms that Green Globe CE & Recycling LLP operates under authorization from the Gujarat Pollution Control Board (GPCB) and follows applicable waste management regulations. It documents responsible recycling practices and verifies that recovered materials are processed into reusable pulp through environmentally compliant methods."

  },


  {
    id: "cppri",

    tab: "Central Pulp & Paper Research Institute",

    title:
      "CPPRI Independent Laboratory Test Report",

    issuer:
      "Central Pulp & Paper Research Institute (CPPRI), Ministry of Commerce & Industry, Government of India",

    date:
      "2nd January 2024",

    expiration:
      "N/A",

    image:
      cppriReport,

    description:
      "This independent laboratory report evaluates the quality and paper-making characteristics of pulp produced from recycled silicone-coated waste paper. The analysis measures key properties including ash content, freeness, burst strength, tear strength, tensile strength, and fiber characteristics, providing technical validation of the recovered pulp quality."

  },


  {
    id: "startup",

    tab: "Department for Promotion of Industry and Internal Trade",

    title:
      "DPIIT Startup India Certificate of Recognition",

    issuer:
      "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India",

    date:
      "27th January 2024",

    expiration:
      "16th January 2034",

    image:
      startupCertificate,

    description:
      "Green Globe CE & Recycling LLP is officially recognized as a startup under the Government of India's Startup India initiative. This recognition confirms the company's registration, eligibility under the national startup program, and operation within the waste management and recycling sector."

  }

];



export default function Credentials() {


  const [activeCertificate, setActiveCertificate] = useState(
    certificates[0]
  );



  return (

    <main>


      <section className="credentials-hero">


        <span className="section-tag light">

          GREEN GLOBE RECYCLING

        </span>


        <h1>

          Credentials & Certifications

        </h1>


        <p>

          Verified documentation demonstrating our commitment to
          responsible recycling, technical validation, and sustainable
          material recovery practices.

        </p>


      </section>



      <section className="credentials-page">


        <div className="certificate-tabs">


          {
            certificates.map((certificate) => (

              <button

                key={certificate.id}

                className={
                  activeCertificate.id === certificate.id
                    ? "certificate-tab active-tab"
                    : "certificate-tab"
                }


                onClick={() =>
                  setActiveCertificate(certificate)
                }

              >

                {certificate.tab}


              </button>

            ))

          }


        </div>




        <div className="certificate-display">


          <div className="certificate-information">


            <span className="section-tag">

              CERTIFICATION

            </span>



            <h2>

              {activeCertificate.title}

            </h2>



            <p>

              {activeCertificate.description}

            </p>



            <div className="certificate-details">


              <div>

                <strong>
                  Issued By
                </strong>

                <span>
                  {activeCertificate.issuer}
                </span>

              </div>



              <div>

                <strong>
                  Issue Date
                </strong>

                <span>
                  {activeCertificate.date}
                </span>

              </div>



              <div>

                <strong>
                  Valid Until
                </strong>

                <span>
                  {activeCertificate.expiration}
                </span>

              </div>


            </div>


          </div>





          <div className="certificate-image-container">
                <CertificateViewer

                    image={activeCertificate.image}

                    alt={activeCertificate.title}

                />


            </div>



        </div>



      </section>


    </main>

  );

}
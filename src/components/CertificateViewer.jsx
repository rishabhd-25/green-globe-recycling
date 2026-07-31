import { useState } from "react";


function CertificateViewer({ image, alt }) {

  const [open, setOpen] = useState(false);


  return (

    <>

      <img

        src={image}

        alt={alt}

        className="certificate-click-image"

        onClick={() => setOpen(true)}

      />



      {
        open && (

          <div

            className="certificate-modal"

            onClick={() => setOpen(false)}

          >


            <button

              className="certificate-close"

              onClick={() => setOpen(false)}

            >

              ×

            </button>



            <img

              src={image}

              alt={alt}

              className="certificate-modal-image"

              onClick={(e) =>
                e.stopPropagation()
              }

            />


          </div>

        )
      }


    </>

  );

}


export default CertificateViewer;
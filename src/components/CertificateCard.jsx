function CertificateCard({ number }) {
  return (
    <div className="certificate-card">

      <div className="certificate-image">

        Certificate Image

      </div>

      <h2>Certification #{number}</h2>

      <p>
        Description of what this certification represents,
        why it matters, and any important details.
      </p>

    </div>
  );
}

export default CertificateCard;
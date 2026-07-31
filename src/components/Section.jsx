function Section({ title, subtitle }) {
  return (
    <section className="info-section">

      <h2>{title}</h2>

      <div className="placeholder-box">
        {subtitle}
      </div>

    </section>
  );
}

export default Section;
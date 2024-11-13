import React from 'react';
import '../App.css'; // Import the CSS file

function CV() {
  return (
    <section id="cv">
      <h2>Mon CV</h2>
      <embed
        id="pdf"
        src="CV_BARBOSA_Mathias.pdf"
        className="responsive-pdf"
        type="application/pdf"
      ></embed>
    </section>
  );
}

export default CV;

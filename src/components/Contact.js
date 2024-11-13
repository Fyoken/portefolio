import React from 'react';

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact</h2>
      <div style={styles.contactInfo}>
        <p style={styles.text}>
          <span role="img" aria-label="Téléphone">📞</span> 06-33-73-18-03
        </p>
        <p style={styles.text}>
          <span role="img" aria-label="Email">✉️</span> 
          <a href="mailto:barbosamathias.pro@gmail.com" style={styles.link}>
            barbosamathias.pro@gmail.com
          </a>
        </p>
        <p style={styles.text}>
          <span role="img" aria-label="Lien LinkedIn">🔗</span> 
          <a href="https://www.linkedin.com/in/mathias-barbosa-b70801220" style={styles.link}>
            LinkedIn
          </a>
        </p>
        <p style={styles.text}>
          <span role="img" aria-label="Lien GitHub">🐙</span> 
          <a href="https://www.github.com/Fyoken" style={styles.link}>
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem 1rem',
    backgroundColor: '#1e1e2f',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#00bcd4',
  },
  contactInfo: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
  },
  text: {
    margin: '0.5rem 0',
  },
  link: {
    color: '#00bcd4',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

export default Contact;

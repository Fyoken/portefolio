import React from 'react';

function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <img 
          src="photo.jpg" 
          alt="Mathias Barbosa" 
          style={styles.profilePhoto} 
        />
        <div style={styles.textContainer}>
          <h2 style={styles.title}>À propos de moi</h2>
          <p style={styles.text}>
            Je suis ingénieur spécialisé en intelligence artificielle. Tout juste diplômé de CY Tech, je recherche un premier emploi en tant que data scientist ou data engineer.
          </p>
          <p style={styles.text}>
            <strong>Compétences principales :</strong> Python, Java, R, Docker, Git, Azure, AWS, PowerBI et Web (NodeJS et ReactJS).
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem 1rem',
    backgroundColor: '#f4f4f9',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  profilePhoto: {
    width: '170px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '1rem',
    border: '3px solid #00bcd4',
  },
  textContainer: {
    textAlign: 'center',
  },
  title: {
    color: '#1e1e2f',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    color: '#333',
    lineHeight: '1.6',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
};

export default About;

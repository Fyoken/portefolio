import React from 'react';

// Liste de vos projets
const projectList = [
  {
    title: "Chatbot LLM embarqué",
    description: "Développement d'un chatbot embarqué avec l'architecture RAG basé sur Llama3 pour un robot autonome.",
    link: "https://github.com/Fyoken/Chatbot_LLM_embarque",
    videoLink: "marvin.mp4",
    videoLink2: "marvin2.mp4",
    motcles: "RAG, LLM, Python, ROS, JavaScript, PyTorch, Keras, Tensorflow, Scikit-Learn, GPU, Prompt Engineering, NLP, SpeechToText, TextToSpeech, Reconnaissance Faciale."
  },
  {
    title: "Worksearch",
    description: "Développement d'une application de job dating assistée par IA.",
    link: "https://github.com/Fyoken/worksearch",
    videoLink: "ws1.mp4",
    videoLink2: "ws2.mp4",
    motcles: "API, LLM, Python, React Native, JavaScript, Node, Prompt Engineering, NLP"
  },
  {
    title: "Jeu d'échecs 2 joueurs ou avec une IA modulable",
    description: "Un jeu complet d'échecs pour s'entraîner avec une IA Alpha-Bêta.",
    link: "https://github.com/Fyoken/Jeu_echecs_IA_alpha_beta",
    videoLink: "echecs.mp4",
    motcles: "Python, Pygame, Alpha-Bêta."
  },
  {
    title: "Reconnaissance faciale",
    description: "Développement d'un système de reconnaissance faciale en utilisant l'Analyse en Composantes Principales (ACP) en Java.",
    link: "https://github.com/Fyoken/Reconnaissance_faciale_ACP_Java",
    videoLink: "reco_faciale.mp4",
    motcles: "Java, JavaFX, Reconnaissance Faciale, ACP, IHM."
  },
  {
    title: "Chatbot de recommandation de films",
    description: "Un chatbot qui recommande des films en fonction des préférences de l'utilisateur.",
    link: "https://github.com/Fyoken/Chatbot_recommandation_films_python",
    videoLink: "chatbot.mp4",
    motcles: "Python, GPT-2, Flan-T5, IMDB."
  },
  {
    title: "Prédiction de visiteur à client",
    description: "Prédiction du traffic de visiteurs sur un site web et déploiement d'une API REST sur un cluster.",
    link: "https://github.com/Fyoken/Prediction_visiteur_Kubernetes_Kafka",
    videoLink: "bigdata.mp4",
    motcles: "Kubernetes, Minikube, Dataiku, Kafka, Confluent, API REST, Big Data, Cluster."
  },
  {
    title: "Jeu du morpion avec une IA imbattable",
    description: "Une IA qui ne perd jamais au morpion, utilisant l'algorithme Minimax.",
    link: "https://github.com/Fyoken/Jeu_Morpion_IA_Imbattable",
    videoLink: "morpions.mp4",
    motcles: "Python, Pygame, Minimax."
  },
  {
    title: "Meeting Display",
    description: "Application web pour planifier et gérer l'accès à une salle de réunion.",
    link: "https://github.com/Fyoken/MeetingDisplay",
    videoLink: "meeting.mp4",
    motcles: "JavaScript, AJAX, CAO, SQL."
  },
  {
    title: "Classification de pokémons",
    description: "Reconnaît les 151 Pokémons avec un réseau de neurones convolutifs.",
    link: "https://github.com/Fyoken/Classification_Pokemons_CNN_python",
    image: "pokemon.png",
    motcles: "Python, CNN."
  },
  {
    title: "Analyse de permis de construire",
    description: "Analyse de l'évolution des permis de construire français pour retracer un historique des legislations locales.",
    link: "https://github.com/Fyoken/Analyse_permis_construire_historique_legislations",
    videoLink: "bunching.mp4",
    motcles: "Python, Bunching, Random Forest, CNN, BDD."
  },
  {
    title: "Segmentation des vaisseaux rétiniens",
    description: "Utilisation des réseaux neuronaux convolutifs pour la segmentation d'images de rétines permettant de distinguer plus simplement certaines pathologies.",
    link: "https://github.com/Fyoken/Segmentation_retines_CNN",
    videoLink: "segmentation.mp4",
    motcles: "Python, Matlab, CNN."
  },
  {
    title: "Site de jeu de piste",
    description: "Un jeu de piste en ligne mettant en avant les femmes de sciences de façon ludique, où les utilisateurs doivent résoudre des énigmes pour avancer.",
    link: "https://github.com/Fyoken/Site_jeu_de_Piste",
    link2: "https://fyoken.github.io/Site_jeu_de_Piste/",
    videoLink: "scifemme.mp4",
    motcles: "JavaScript, Web."
  },
  {
    title: "Jeu Motus",
    description: "Développement du jeu Motus en utilisant une architecture microservices NodeJS.",
    link: "https://github.com/Fyoken/Jeu_Motus_Microservices",
    videoLink: "motus.mp4",
    motcles: "NodeJS, Microservices, JavaScript."
  },
  {
    title: "Site e-commerce JEE",
    description: "Site de e-commerce développé en utilisant Jakarta EE (JEE).",
    link: "https://github.com/Fyoken/Site_commerce_JEE",
    videoLink: "jee.mp4",
    motcles: "Jakarta EE (JEE), Maven, Spring, Hibernate, Springboot, Web."
  },

];

function Projects() {
  return (
    <section id="projects">
      <h2>Mes projets</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            {/* Affichage de l'image si elle existe */}
            {project.image && (
              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: 'auto',
                    height: '300px',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </div>
            )}


            {/* Affichage des vidéos si elles existent */}
            {(project.videoLink || project.videoLink2) && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {project.videoLink && (
                  <div style={{ textAlign: 'center' }}>
                    <video
                      width="auto"
                      height="500px"
                      controls
                      loop
                      autoPlay
                      muted
                      style={{ border: 'none' }}
                    >
                      <source src={project.videoLink} type="video/mp4" />
                      Votre navigateur ne prend pas en charge la balise vidéo.
                    </video>
                  </div>
                )}
                {project.videoLink2 && (
                  <div style={{ textAlign: 'center' }}>
                    <video
                      width="auto"
                      height="500px"
                      controls
                      loop
                      autoPlay
                      muted
                      style={{ border: 'none' }}
                    >
                      <source src={project.videoLink2} type="video/mp4" />
                      Votre navigateur ne prend pas en charge la balise vidéo.
                    </video>
                  </div>
                )}
              </div>
            )}
            <p><strong>Mots-clés : </strong>{project.motcles}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
            {project.link2 && (<a href={project.link2} target="_blank" rel="noopener noreferrer"> / Accéder au site</a>)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

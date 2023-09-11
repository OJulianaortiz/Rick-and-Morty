import styles from "../views/About.module.css";

const AboutText = () => {
  return (
    <>
      <h1 className={styles.titulo}>Welcome to my app!</h1>

      <p className={styles.parrafo}>
        Hi!, my name is Juliana, im an enthusiastic artist and cinema lover, and
        i decided to create this interactive app with cards from one of my fav
        shows!, 'Rick and Morty', and i just wanted to give every chatacter the
        attention it desserves, so here you will be able to interac with every
        single character!, wich are a total of 897 by the way :D
      </p>
    </>
  );
};

export default AboutText;

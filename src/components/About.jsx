import styles from "../styles/About.module.scss";
import profileImg from "../assets/images/profile-img.svg";

export function About() {
  return (
    <main className={styles.about}>
      <section className={styles.about__profile}>
        {/* <img src={profileImg} alt="" /> */}
        <h1>João Victor dos Santos Pepe</h1>
        <span>Desenvolvedor Frontend</span>
      </section>
      <section className={styles.about__summary}>
        <h2>Resumo</h2>
        <p>
          Desenvolvedor frontend com prazer e excelência, sempre buscando novos
          conhecimentos e refinando minhas habilidades.
        </p>
      </section>
      <section className={styles.about__qualifications}>
        <h2>Qualificações</h2>
        <ul>
          <li>Inglês fluente autodidata</li>
        </ul>
      </section>
      {/* <section className={styles.about__associations}>
        <h2>Clubs & Associations</h2>
        <ul>
          <li>
            <h3>Dragon Rowing Club</h3>
            <p>Rower</p>
            <span>2021-2022</span>
          </li>
          <li>
            <h3>Writing Help Center</h3>
            <p>Writing Guide</p>
            <span>2022-2023</span>
          </li>
        </ul>
      </section> */}
    </main>
  );
}

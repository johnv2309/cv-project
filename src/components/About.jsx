import styles from "../styles/About.module.scss";
import profileImg from "../assets/images/profile-img.svg";

export function About() {
  return (
    <main className={styles.about}>
      <section className={styles.about__profile}>
        <img src={profileImg} alt="" />
        <h1>Hannah Panizares</h1>
        <span>Environmental Science Researcher</span>
      </section>
      <section className={styles.about__summary}>
        <h2>Summary</h2>
        <p>
          Supporting our ecosystem and reversing the effects of climate change
          are the reasons I get up in the morning. International cooperation is
          necessary, but I believe it begins with uncovering new findings and
          developing exciting technologies through dedication and innovation
        </p>
      </section>
      <section className={styles.about__qualifications}>
        <h2>Qualifications</h2>
        <ul>
          <li>
            Strong academic performance in environmental biology and natural
            sciences.
          </li>
          <li>
            Experienced with professional lab settings, experimenting and
            reporting.
          </li>
          <li>
            High grasp of biochemistry, ecosystem structures, and energy
            conservation methods.
          </li>
        </ul>
      </section>
      <section className={styles.about__associations}>
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
      </section>
    </main>
  );
}

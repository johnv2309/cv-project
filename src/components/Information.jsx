import styles from "../styles/Information.module.scss";
import { DeviceMobile, GithubLogo, MapPin, UserSquare } from "phosphor-react";
import Skill from "./Skill";
import { Experience } from "./Experience";

export function Information() {
  const person = {
    experience: [
      {
        where: "Desenvolvedor Frontend",
        when: "Atual",
        tasks: [
          "Desenvolvendo aplicações frontend com React, Styled Components e Javascript",
        ],
      },
    ],
    skills: [
      { name: "HTML", amount: "70" },
      { name: "CSS / SCSS", amount: "75" },
      { name: "CSS-in-JS", amount: "60" },
      { name: "Javascript", amount: "75" },
      { name: "Typescript", amount: "50" },
      { name: "React", amount: "60" },
    ],
  };
  return (
    <aside className={styles.information}>
      <section className={styles.information__contact}>
        <ul>
          <li>
            <MapPin color={"#f6b64c"} />
            São José dos Pinhais, Roseira - PR
          </li>
          <li>
            <DeviceMobile color={"#f6b64c"} />
            (41) 99229-5501
          </li>
          <li>
            <UserSquare color={"#f6b64c"} />
            jv.pc2309@gmail.com
          </li>
          <li>
            <GithubLogo color={"#f6b64c"} />
            github.com/johnv2309
          </li>
        </ul>
      </section>
      <section className={styles.information__education}>
        <h2>Educação</h2>
        <p>
          <strong>Colégio Estadual Tarsila do Amaral</strong>
          <span>2018</span>
          Ensino médio completo
        </p>
        <p>
          <strong>Udemy</strong>
          <span>2022</span>
          Javascript iniciante ao avançado
        </p>
      </section>
      <section className={styles.information__experience}>
        <h2>Experiência</h2>
        {person["experience"].map((experience) => (
          <Experience
            where={experience.where}
            when={experience.when}
            task={experience.tasks}
          />
        ))}
      </section>
      <section className={styles.information__skills}>
        <h2>Habilidades</h2>
        <div className={styles.skills__slider}>
          {person["skills"].map((skill) => (
            <Skill key={skill.name} skill={skill.name} amount={skill.amount} />
          ))}
        </div>
      </section>
    </aside>
  );
}

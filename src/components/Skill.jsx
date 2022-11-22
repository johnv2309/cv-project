export default function Skill({skill, amount}) {
  return (
    <>
          <p>{skill}</p>
      <strong>
        <span style={{ width: `${amount}%` }}></span>
      </strong>
    </>
  );
}

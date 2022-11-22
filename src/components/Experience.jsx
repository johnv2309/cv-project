export function Experience({ where, time, ...job }) {
  return (
    <div>
      <strong>{where}</strong>
      <span>{time}</span>
      <ul></ul>
    </div>
  );
}

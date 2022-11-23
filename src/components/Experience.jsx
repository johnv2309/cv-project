export function Experience({ where, when, task = [] }) {
  return (
    <div>
      <strong>{where}</strong>
      <span>{when}</span>
      <ul>
        {task.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}

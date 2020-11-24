export default function Card({ name, age, breed }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <h2>{age}</h2>
      <p>{breed}</p>
    </div>
  );
}

interface ContinentProps {
  continent: {
    name: string;
    code: string;
  };
}
export default function Continent({ continent: { name } }: ContinentProps) {
  return (
    <div className="card">
      <p>{name}</p>
    </div>
  );
}

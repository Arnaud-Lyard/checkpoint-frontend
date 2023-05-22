interface CountryProps {
  country: {
    name: string;
    emoji: string;
  };
}
export default function Country({ country: { name, emoji } }: CountryProps) {
  return (
    <div className="card">
      <p>{emoji}</p>
      <p>{name}</p>
    </div>
  );
}

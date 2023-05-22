import { Link } from "react-router-dom";
import Continent from "../components/Continent";
import { useContinentsQuery } from "../gql/generated/schema";

export default function ContinentsList() {
  const { data } = useContinentsQuery();
  const continents = data?.continents || [];
  console.log(continents);

  return (
    <>
      <h1 className="title">Continents</h1>
      <div className="wrapper">
        {continents.map((continent) => (
          <Link className="wrapper_link" to={continent.code}>
            <Continent key={continent.code} continent={continent} />
          </Link>
        ))}
      </div>
    </>
  );
}

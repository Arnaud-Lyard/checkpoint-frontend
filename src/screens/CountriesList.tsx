import { Link, useParams } from "react-router-dom";
import { useContinentQuery } from "../gql/generated/schema";
import Country from "../components/Country";

export default function CountriesList() {
  const { code = "" } = useParams();
  const { data } = useContinentQuery({ variables: { code } });
  const countries = data?.continent?.countries || [];
  return (
    <>
      <h1 className="title">Countries</h1>
      <div className="wrapper">
        {countries.map((country) => (
          <Link className="wrapper_link" to={country.code}>
            <Country key={country.code} country={country} />
          </Link>
        ))}
      </div>
    </>
  );
}

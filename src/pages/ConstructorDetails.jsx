import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./constructorDetails.css";

export default function ConstructorDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/f1api/current/teams/${id}`);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error while loading page.</p>;

  const team = data.team[0];

  return (
    <div className="details-wrapper">
      <div className="details-box">

        <Link to="/constructors" className="back-btn">
          ← Back
        </Link>

        <img
          src={`/teams/${team.teamId}.png`}
          alt={team.teamName}
          className="details-img"
        />

        <h1>{team.teamName}</h1>

        <p><strong>Nationality:</strong> {team.teamNationality}</p>
        <p><strong>Debut:</strong> {team.firstAppeareance}</p>
        <p>
          <strong>Constructor championships:</strong>{" "}
          {team.constructorsChampionships > 0 ? team.constructorsChampionships : "None"}
        </p>
        <p>
          <strong>Drivers championships:</strong>{" "}
          {team.driversChampionships > 0 ? team.driversChampionships : "None"}
        </p>

        <p>
          <strong>Wikipedia: </strong>
          <a href={team.url} className="wiki-link" target="_blank">
            Click here
          </a>
        </p>
      </div>
    </div>
  );
}

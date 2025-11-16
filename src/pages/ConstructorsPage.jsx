import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./constructors.css";

export default function ConstructorsPage() {
  const { data, loading, error } = useFetch("/f1api/current/teams");

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error while loading page.</p>;

  const teams = data.teams;

  return (
    <div className="constructors-container">
      {teams.map((team) => (
        <Link
          key={team.teamId}
          to={`/constructors/${team.teamId}`}
          className="constructor-card"
        >
          <img
            src={`/teams/${team.teamId}.png`}
            className="constructor-img"
            alt={team.teamName}
          />
          <div className="constructor-name">{team.teamName}</div>
        </Link>
      ))}
    </div>
  );
}

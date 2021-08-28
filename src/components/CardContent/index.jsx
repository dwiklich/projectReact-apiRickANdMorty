import "./index.css";

export const CardContent = ({ character }) => {
  return (
    <div className="card-content">
      <h1>{character.name}</h1>
      <div className="card-content_character">
        <p>
          Status: <span>{character.status} </span>
        </p>
        <p>
          Genero: <span>{character.gender}</span>
        </p>
        <p>
          Natural: <span>{character.origin.name}</span>
        </p>
        <p>
          Especie: <span>{character.species}</span>
        </p>
      </div>
    </div>
  );
};

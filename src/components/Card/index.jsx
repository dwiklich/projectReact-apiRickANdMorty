import { CardContent } from "../CardContent";
import { CardPhoto } from "../CardPhoto";
import "./index.css";

export const Card = ({ character }) => {
  const handleClick = (e) => {
    console.log(e.target.parentNode);
    console.log("Clicado");
  };

  return (
    <div className="card">
      <CardPhoto image={character.image} name={character.name} />
      <CardContent character={character} />
      <input type="button" value="Entrar" onClick={handleClick} />
    </div>
  );
};

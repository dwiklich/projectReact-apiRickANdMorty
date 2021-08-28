import "./index.css";

export const CardPhoto = ({ image, name }) => {
  return (
    <div className="card-photo">
      <img src={image} alt={name} className="card-photo_img" />
    </div>
  );
};

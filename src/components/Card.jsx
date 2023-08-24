import Tags from './Tags';

const Card = ({ image, name, description, tagText, tagColor, buttonColor, buttonText }) => {
    return (
      <div className="card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="card-footer">
          <Tags text={tagText} color={tagColor} />
          <button className={`btn btn-${buttonColor} w-100`}>{buttonText}</button>
        </div>
      </div>
  );
};

export default Card;

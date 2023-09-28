import Card from "../Card/Card.jsx";

export default function Cards({ characters, onClose, isFav = false }) {
  return (
    <div className="cards">
      {characters.length === 0 && <h2>Personajes Rick/Morty</h2>}
      <div className="interface">
        {characters.map((character) => {
          return (
            <Card
              isFav={isFav}
              id={character.id}
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}

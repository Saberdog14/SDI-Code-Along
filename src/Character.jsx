export default function Character({ character }) {
  return (
    <>
      <div id={character.id}>
        <h3>{character.name}</h3>
        <img id="character-pic" src={character.image} />
      </div>
    </>
  );
}

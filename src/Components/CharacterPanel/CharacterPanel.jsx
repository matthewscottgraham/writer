import React from "react";
import styles from "./CharacterPanel.module.css";
import buttonStyles from "../../Styles/Buttons.module.css";
import panelStyles from "../../Styles/Panels.module.css";

function CharacterPanel({currentPage, characters, setCharacters, currentCharacterID, setCurrentCharacterID}) {
  if (currentPage !== 'characters') return null;

  const getClassName = (characterID) => currentCharacterID === characterID ? buttonStyles.activeButton : buttonStyles.button;

  const addCharacter = () => {
    const newCharacter = {
      id: crypto.randomUUID(),
      name: 'New Character'
    }

    setCharacters([...characters, newCharacter]);
    setCurrentCharacterID(newCharacter.id);
  }
  return (
      <div className={panelStyles.objectListPanel}>
        {characters.map((character)=>(
          <button key={character.id}
                  className={getClassName(character.id)}
                  onClick={() => setCurrentCharacterID(character.id)}>
            {character.name}
          </button>
        ))}
        <button onClick={addCharacter}>+</button>
      </div>
  )
}

export default CharacterPanel;
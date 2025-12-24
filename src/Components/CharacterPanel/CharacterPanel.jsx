import React from "react";
import styles from "./CharacterPanel.module.css";
import buttonStyles from "../../Styles/Buttons.module.css";
import panelStyles from "../../Styles/Panels.module.css";
import CharacterEditor from "../CharacterEditor/CharacterEditor.jsx";

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

  const selectCharacter = (characterID) => {
    setCurrentCharacterID(characterID);
  }

  const getCurrentCharacter = () => characters.find(c => c.id === currentCharacterID);

  return (
      <div>
        <div className={panelStyles.objectListPanel}>
          {characters.map((character)=>(
            <button key={character.id}
                    className={getClassName(character.id)}
                    onClick={() => selectCharacter(character.id)}>
              {character.name}
            </button>
          ))}
          <button onClick={addCharacter}>+</button>
        </div>
        <CharacterEditor character={getCurrentCharacter()} />
      </div>
  )
}

export default CharacterPanel;
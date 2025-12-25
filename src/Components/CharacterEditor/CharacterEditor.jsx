import React from 'react';
import panelStyles from '../../Styles/Panels.module.css';

function CharacterEditor({isActive, characterState}) {
  if (!isActive) return null;

  const {list, setList, currentID} = characterState;
  const character = list.find(c => c.id === currentID);

  if (!character) return null;

  function handleDelete() {
    if (!window.confirm('Are you sure you want to delete this character?')) return

    const newList = list.filter(c => c.id !== currentID);
    setList(newList);
    characterState.setCurrentID(null);
  }

  function handleNameChange(e) {
    const newName = e.target.value;
    setList(list.map(c => c.id === currentID ? {...c, name: newName} : c));
  }

  return (
    <div className={panelStyles.panel}>
      <div className={panelStyles.panelHeader}>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>ID: {character.id}</div>
      <div>Name: <input value={character.name} onChange={handleNameChange}></input></div>
    </div>
  );
}

export default CharacterEditor;
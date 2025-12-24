import React from 'react';
import panelStyles from '../../Styles/Panels.module.css';

function CharacterEditor({character}) {
  return (
    <div className={panelStyles.floatingPanel}>
      <div className={panelStyles.floatingPanelHeader}>
        <button>Delete</button>
      </div>
      <div>ID: {character.id}</div>
      <div>Name: <input value={character.name}></input></div>
    </div>
  );
}

export default CharacterEditor;
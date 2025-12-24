import React from "react";
import styles from "./ScenePanel.module.css";
import buttonStyles from "../../Styles/Buttons.module.css";
import panelStyles from "../../Styles/Panels.module.css";

function ScenePanel({currentPage, scenes, setScenes, currentSceneID, setCurrentSceneID}){
  if (currentPage !== 'scenes') return null;

  const getClassName = (sceneID) => currentSceneID === sceneID ? buttonStyles.activeButton : buttonStyles.button;

  const addScene = () => {
    const newScene = {
      id: crypto.randomUUID(),
      name: 'New Scene'
    };
    setScenes([...scenes, newScene]);
    setCurrentSceneID(newScene.id);
  }

  return (
    <div className={panelStyles.objectListPanel}>
      { scenes.map((scene) => (
        <button key={scene.id}
                className={getClassName(scene.id)}
                onClick={() => setCurrentSceneID(scene.id)}>
          {scene.name}
        </button>
      ))}
      <button onClick={addScene}>+</button>
    </div>
  );
}

export default ScenePanel;
import React from "react";
import styles from "./ScenePanel.module.css";
import buttonStyles from "../../Styles/Buttons.module.css";

function ScenePanel({scenes, setScenes, currentSceneID, setCurrentSceneID}){
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
    <div className={styles.scenePanel}>
      { scenes.map((scene) => (
        <button key={scene.id} className={getClassName(scene.id)} onClick={() => setCurrentSceneID(scene.id)}>
          {scene.name}
        </button>
      ))}
      <button onClick={addScene}>+</button>
    </div>
  );
}

export default ScenePanel;
import React from "react";
import entitySchemas from "../../Schemas/entitySchemas.js";
import EntityEditor from "../EntityEditor/EntityEditor.jsx";
import SequenceEditor from "../SequenceEditor/SequenceEditor.jsx";
import panelStyles from "../../Styles/Panels.module.css";

function WorkArea({currentPage, characterState, itemState, sceneState}) {

  const stateMap = {
    character: characterState,
    item: itemState,
    scene: sceneState
  }

  const schema = entitySchemas[currentPage];
  const state = stateMap[currentPage];

  const isScene = currentPage === 'scene';
  const currentScene = isScene
      ? sceneState.list.find(s => s.id === sceneState.currentID)
      : null;
  const currentSequence = currentScene?.sequences.find(s => s.id === sceneState.currentSequenceID);

  function updateSequence(updatedSequence) {
    sceneState.setList(prev => prev.map(
        scene => scene.id !== currentScene.id
          ? scene
          : {
            ...scene,
            sequences: scene.sequences.map(
              seq => seq.id === updatedSequence.id
                  ? updatedSequence
                  : seq
            )
        }
      ));
  }

  return (
      <div className={panelStyles.workArea}>
        <EntityEditor
          isActive={schema}
          state={state}
          schema={schema}
        />
        { isScene && currentScene && currentSequence && (
            <SequenceEditor
                key={currentSequence.id}
                sequence={currentSequence}
                setSequence={updateSequence} />
          )
        }
      </div>
  );
}

export default WorkArea;
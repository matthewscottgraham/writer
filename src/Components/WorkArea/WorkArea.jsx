import React, {useState} from "react";
import EntityEditor from "../EntityEditor/EntityEditor.jsx";
import SequenceEditor from "../SequenceEditor/SequenceEditor.jsx";
import SequencePreview from "../SequenceEditor/SequencePreview.jsx";
import EntityPicker from "../SequenceEditor/EntityPicker.jsx";
import entitySchemas from "../../Schemas/entitySchemas.js";
import panelStyles from "../../Styles/Panels.module.css";


function WorkArea({currentPage, characterState, itemState, sceneState, currentSequence, passages}) {
  const [entityPickerType, setEntityPickerType] = useState(null);

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

  function selectEntity(id) {
    const type = entityPickerType;
    setEntityPickerType(null);
    currentSequence && sceneState.setList(
        prev => prev.map(
          scene => scene.id !== currentScene.id
            ? scene
            : {
              ...scene,
              sequences:
                scene.sequences.map(
                  seq => seq.id === currentSequence.id
                    ? {
                      ...seq,
                      text: seq.text + `<${type}=${id}>`
                    }
                    : seq
               )
            }
        )
    );
  }

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

        {isScene && currentScene && currentSequence && (
            <>
              <SequenceEditor
                  key={currentSequence.id}
                  sequence={currentSequence}
                  setSequence={updateSequence}
                  setEntityPickerType={setEntityPickerType}
              />
              <SequencePreview passages={passages} />
            </>
        )}

        {entityPickerType && (
            <EntityPicker
                schema={entitySchemas[entityPickerType]}
                list={stateMap[entityPickerType].list}
                setList={stateMap[entityPickerType].setList}
                onSelect={selectEntity} />
        )}
      </div>
    );
}

export default WorkArea;
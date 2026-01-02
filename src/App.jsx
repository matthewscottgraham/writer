import { useState, useMemo, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import WorkArea from './Components/WorkArea/WorkArea';
import {saveDataToLocalStorage, retrieveDataFromLocalStorage} from './Utilities/Serializer.js';
import {parsePassages} from "./Utilities/PassageParser.js";
import entitySchema from './Schemas/entitySchemas.js';
import './App.css'

const defaultScene = entitySchema.createEntity(entitySchema.scene);
let saveTimeout;

function App() {
  const [currentPage, setCurrentPage] = useState('scene')

  const loadedState = retrieveDataFromLocalStorage();
  if (loadedState.scenes.length === 0) {loadedState.scenes.push(defaultScene)}
  const characterState = useEntity(loadedState.characters);
  const itemState = useEntity(loadedState.items);
  const sceneState = useSceneEntity(loadedState.scenes);

  const currentScene = sceneState.list.find(s => s.id === sceneState.currentID);
  const currentSequence = currentScene?.sequences.find(s => s.id === sceneState.currentSequenceID);

  const passages = useMemo(()=> {
    return currentSequence?.text
        ? parsePassages(currentSequence.text)
        : [];
  },[currentSequence?.text]);

  useEffect(() => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      saveDataToLocalStorage(characterState.list, itemState.list, sceneState.list);
    }, 1000);
    return () => clearTimeout(saveTimeout);
  }, [characterState.list, itemState.list, sceneState.list]);

  return (
    <div className="app">
      <Navbar currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              characters={characterState.list}
              items={itemState.list}
              scenes={sceneState.list} />
      <div className="content">
        <Sidebar currentPage={currentPage}
                 characterState={characterState}
                 itemState={itemState}
                 sceneState={sceneState} />
        <WorkArea currentPage={currentPage}
                  characterState={characterState}
                  itemState={itemState}
                  sceneState={sceneState}
                  currentSequence={currentSequence}
                  passages={passages}
        />

      </div>
    </div>
  )
}

function useEntity(initialItems){
  const initialID = initialItems[0]?.id ?? null;
  const [list, setList] = useState(initialItems);
  const [currentID, setCurrentID] = useState(initialID);
  return{list, setList, currentID, setCurrentID };
}

function useSceneEntity(initialItems){
  const [list, setList] = useState(initialItems);
  const [currentID, setCurrentID] = useState(initialItems[0]?.id ?? null);
  const firstSequenceID = initialItems[0]?.sequences?.[0]?.id ?? null;
  const [currentSequenceID, setCurrentSequenceID] = useState(firstSequenceID);
  return{list, setList, currentID, setCurrentID, currentSequenceID, setCurrentSequenceID };
}

export default App

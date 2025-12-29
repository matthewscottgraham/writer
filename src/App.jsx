import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import WorkArea from './Components/WorkArea/WorkArea';
import entitySchema from './Schemas/entitySchemas.js';
import './App.css'

const initialCharacter = entitySchema.createEntity(entitySchema.character);
const initialItem = entitySchema.createEntity(entitySchema.item);
const initialScene = entitySchema.createEntity(entitySchema.scene);

function App() {
  const [currentPage, setCurrentPage] = useState('scene')
  const characterState = useEntity([initialCharacter], initialCharacter.id);
  const itemState = useEntity([initialItem], initialItem.id);
  const sceneState = useSceneEntity([initialScene], initialScene.id);

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="content">
        <Sidebar currentPage={currentPage}
                 characterState={characterState}
                 itemState={itemState}
                 sceneState={sceneState} />
        <WorkArea currentPage={currentPage}
                  characterState={characterState}
                  itemState={itemState}
                  sceneState={sceneState} />

      </div>
    </div>
  )
}

function useEntity(initialItems, initialID){
  const [list, setList] = useState(initialItems);
  const [currentID, setCurrentID] = useState(initialID);
  return{list, setList, currentID, setCurrentID };
}

function useSceneEntity(initialItems, initialID){
  const [list, setList] = useState(initialItems);
  const [currentID, setCurrentID] = useState(initialID);
  const firstSequenceID = initialItems[0]?.sequences?.[0]?.id ?? null;
  const [currentSequenceID, setCurrentSequenceID] = useState(firstSequenceID);
  return{list, setList, currentID, setCurrentID, currentSequenceID, setCurrentSequenceID };
}

export default App

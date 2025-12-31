import { useState, useMemo } from 'react';
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

  const currentScene = sceneState.list.find(s => s.id === sceneState.currentID);
  const currentSequence = currentScene?.sequences.find(s => s.id === sceneState.currentSequenceID);

  const passages = useMemo(()=> {
    return currentSequence?.text
        ? parsePassages(currentSequence.text)
        : [];
  },[currentSequence?.text]);

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
                  sceneState={sceneState}
                  currentSequence={currentSequence}
                  passages={passages}
        />

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

const parsePassage = (rawText) => {
  const tagRegex = /<([^=]+)=([^>]+)>/g;
  let match;
  const tags = [];
  let bodyText = rawText;

  while ((match = tagRegex.exec(rawText)) !== null) {
    tags.push({
      key: match[1].trim(),
      value: match[2].trim()
    });
    bodyText = bodyText.replace(match[0], '');
  }

  return {tags, text: bodyText.trim()};
}

const parsePassages = (rawText) => {
  return rawText
      .split(/\n\s*\n/)
      .map(block => block.trim())
      .filter(Boolean)
      .map(parsePassage);
};

export default App

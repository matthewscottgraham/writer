import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import CharacterPanel from "./Components/CharacterPanel/CharacterPanel.jsx";
import ItemPanel from "./Components/ItemPanel/ItemPanel.jsx";
import ScenePanel from "./Components/ScenePanel/ScenePanel.jsx";
import './App.css'


function App() {
  const [currentPage, setCurrentPage] = useState('scenes')

  const [characters, setCharacters] = useState([{id: '1', name: 'Narrator'}])
  const [currentCharacterID, setCurrentCharacterID] = useState('1')

  const [items, setItems] = useState([{id: '1', name: 'New Item'}])
  const [currentItemID, setCurrentItemID] = useState('1')

  const [scenes, setScenes] = useState([{id: '1', name: 'New Scene'}]);
  const [currentSceneID, setCurrentSceneID] = useState('1');

  return (
    <div>
      <Navbar currentPage={currentPage}
              setCurrentPage={setCurrentPage} />
      <CharacterPanel currentPage={currentPage}
                      characters={characters}
                      setCharacters={setCharacters}
                      currentCharacterID={currentCharacterID}
                      setCurrentCharacterID={setCurrentCharacterID} />
      <ItemPanel currentPage={currentPage}
                 items={items}
                 setItems={setItems}
                 currentItemID={currentItemID}
                 setCurrentItemID={setCurrentItemID} />
      <ScenePanel currentPage={currentPage}
                  scenes={scenes}
                  setScenes={setScenes}
                  currentSceneID={currentSceneID}
                  setCurrentSceneID={setCurrentSceneID} />
    </div>
  )
}

export default App

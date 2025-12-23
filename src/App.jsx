import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import ScenePanel from "./Components/ScenePanel/ScenePanel.jsx";
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('scenes')
  const [scenes, setScenes] = useState([{id: '1', name: 'New Scene'}]);
  const [currentSceneID, setCurrentSceneID] = useState("1");

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <ScenePanel scenes={scenes} setScenes={setScenes}
          currentSceneID={currentSceneID} setCurrentSceneID={setCurrentSceneID} />
    </div>
  )
}

export default App

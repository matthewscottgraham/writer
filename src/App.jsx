import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import WorkArea from './Components/WorkArea/WorkArea';
import './App.css'


function App() {
  const [currentPage, setCurrentPage] = useState('scenes')

  const characterState = useEntity(
      [{ id: '1', name: 'New Character' }],
      '1'
  );

  const itemState = useEntity(
      [{ id: '1', name: 'New Item' }],
      '1'
  );

  const sceneState = useEntity(
      [{ id: '1', name: 'New Scene' }],
      '1'
  );

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

export default App

import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import WorkArea from './Components/WorkArea/WorkArea';
import './App.css'
import ObjectListPanel from "./Components/ObjectListPanel/ObjectListPanel.jsx";


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
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>
        <Sidebar>
          <ObjectListPanel
              isActive={currentPage === 'characters'}
              state={characterState}
              createItem={()=> ({
                id: crypto.randomUUID(),
                name: 'New Character'
              })} />
          <ObjectListPanel
              isActive={currentPage === 'items'}
              state={itemState}
              createItem={()=> ({
                id: crypto.randomUUID(),
                name: 'New Item'
              })} />
          <ObjectListPanel
              isActive={currentPage === 'scenes'}
              state={sceneState}
              createItem={()=> ({
                id: crypto.randomUUID(),
                name: 'New Scene'
              })} />
        </Sidebar>
        <WorkArea />
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

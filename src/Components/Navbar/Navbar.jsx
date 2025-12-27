import React from "react";
import panelStyles from "../../Styles/Panels.module.css";
import buttonStyles from "../../Styles/Buttons.module.css";

function Navbar({currentPage, setCurrentPage}) {
  const getClassName = (page) => currentPage === page ? buttonStyles.activeButton : buttonStyles.button;

  return (
    <nav>
      <div className={panelStyles.navbar}>
        <h2>Writer</h2>
        <div style={{width: '100%' }} />
        <button className={getClassName('character')} onClick={()=>setCurrentPage('character')}>Characters</button>
        <button className={getClassName('item')} onClick={()=>setCurrentPage('item')}>Items</button>
        <button className={getClassName('scene')} onClick={()=>setCurrentPage('scene')}>Scenes</button>
      </div>
    </nav>
  )
}

export default Navbar;
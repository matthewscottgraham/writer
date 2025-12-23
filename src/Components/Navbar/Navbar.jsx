import React from "react";
import styles from "./Navbar.module.css";
import buttonStyles from "../../Styles/Buttons.module.css";

function Navbar({currentPage, setCurrentPage}) {
  const getClassName = (page) => currentPage === page ? buttonStyles.activeButton : buttonStyles.button;

  return (
    <nav>
      <div className={styles.navbar}>
        <button className={getClassName('characters')} onClick={()=>setCurrentPage('characters')}>Characters</button>
        <button className={getClassName('items')} onClick={()=>setCurrentPage('items')}>Items</button>
        <button className={getClassName('scenes')} onClick={()=>setCurrentPage('scenes')}>Scenes</button>
      </div>
    </nav>
  )
}

export default Navbar;
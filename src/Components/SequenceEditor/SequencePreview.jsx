import React from "react";
import panelStyles from "../../Styles/Panels.module.css";
import styles from "./SequencePreview.module.css";

function SequencePreview({ passages }) {
  return (
      <div className={panelStyles.panel}>
        <div className={panelStyles.panelHeader}>
          <h3>Sequence Preview</h3>
        </div>
        <div className={styles.passagePanel}>
          { passages.map((passage, index) => (
            <div key={index} className={styles.passage}>
              { passage.tags.length > 0 && (
                <div className={styles.passageTags}>
                  { passage.tags.map((tag, tagIndex) => (
                    <div key={tagIndex}>{tag.key}: {tag.value}</div>
                  ))}
            </div>
            )
          }
          <div className={styles.passageText}>
            { passage.text }
          </div>
        </div>
          ))}
        </div>
      </div>
  )
}

export default SequencePreview;
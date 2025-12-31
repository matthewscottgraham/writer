import React, {useMemo} from 'react';
import panelStyles from '../../Styles/Panels.module.css';

function SequenceEditor({sequence, setSequence}) {



  if (!sequence) return null;

  const handleBodyTextChange = (e) => {
    setSequence({...sequence, text: e.target.value});
  }

  return (
      <div className={panelStyles.sequenceEditorPanel}>
        <div className={panelStyles.panelHeader}>
          <h3>Sequence Editor</h3>
        </div>
        <div className={panelStyles.workAreaContent}>
          <div className={panelStyles.nestedItem}>
            <div style={{minWidth: '6em'}}>
              Name:
            </div>
            <input
                type='text'
                value={sequence.name}
                onChange={(e) => setSequence({...sequence, name: e.target.value})}
            />
          </div>
          <div className={panelStyles.nestedItem}>
            <div style={{minWidth: '6em'}}>
              Invoke On:
            </div>
            <select
                value={sequence.invokeType}
                onChange={(e) => setSequence({...sequence, invokeType: e.target.value})}>
              <option>sceneStart</option>
              <option>interaction</option>
              <option>scripted</option>
            </select>
          </div>
          <div className={panelStyles.nestedItem}>
            <div style={{minWidth: '6em'}}>
              Single Use?
            </div>
            <input
                type='checkbox'
                checked={sequence.isSingleUse}
                onChange={(e) => setSequence({...sequence, isSingleUse: e.target.checked})}
            />
          </div>
          <div className={panelStyles.textAreaField}>
            Text:
            <textarea
                value={sequence.text}
                onChange={handleBodyTextChange} />
          </div>
        </div>
      </div>
  )
}

export default SequenceEditor;
import React, {useRef} from 'react';
import panelStyles from '../../Styles/Panels.module.css';

function SequenceEditor({sequence, setSequence, setEntityPickerType}) {
  const textAreaRef = useRef(null);

  if (!sequence) return null;

  const handleBodyTextChange = (e) => {
    setSequence({...sequence, text: e.target.value});
  }

  const handleAddCharacterTag = () => {
    setEntityPickerType('character')
  }

  const handleAddIdTag = () => {
    insertAtCaret(`<id=${crypto.randomUUID()}>`);
  }

  const insertAtCaret = (insert) => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const newText = sequence.text.slice(0, start) + insert + sequence.text.slice(end);

    setSequence({...sequence, text: newText});

    requestAnimationFrame(() => {
      textArea.focus();
      textArea.setSelectionRange(start + insert.length, end + insert.length);
    });
  }

  return (
      <div className={panelStyles.sequenceEditorPanel}>
        <div className={panelStyles.panelHeader}>
          <h3>Sequence Editor</h3>
        </div>
        <div className={panelStyles.workAreaContent}>
          <div>
            id: {sequence.id}
          </div>
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
            <div className={panelStyles.textAreaToolPanel}>
              <button onClick={handleAddIdTag}>Insert ID</button>
              <button onClick={handleAddCharacterTag}>Insert Character</button>
            </div>
            <textarea
                ref={textAreaRef}
                value={sequence.text}
                onChange={handleBodyTextChange} />
          </div>
        </div>
      </div>
  )
}

export default SequenceEditor;
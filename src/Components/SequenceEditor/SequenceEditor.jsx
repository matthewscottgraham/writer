import React, {useMemo} from 'react';
import panelStyles from '../../Styles/Panels.module.css';

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

function SequenceEditor({sequence, setSequence}) {

  const passages = useMemo(
      () => parsePassages(sequence.text ?? ''),
      [sequence?.text]
  );

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
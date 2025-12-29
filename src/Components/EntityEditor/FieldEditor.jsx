import React from "react";
import panelStyles from '../../Styles/Panels.module.css';
import buttonStyles from "../../Styles/Buttons.module.css";

function FieldEditor({field, value, onChange, selectedID, onSelect}) {

  function handleDelete(items, index) {
    if (!window.confirm(`Are you sure you want to delete this ${field.label}?`)) return

    onChange(items.filter((_, i) => i !== index));
  }

  switch (field.type) {
    case 'text':
      return (
          <label className={panelStyles.field}>
            <div style={{minWidth: '6em'}}>
              {field.label}:
            </div>
            <input
                type='text'
                value={value ?? ''}
                onChange={e => onChange(e.target.value)}
            />
          </label>
      );
    case 'object[]': {
      const items = value ?? [];

      if (field.key === 'sequences' && onSelect){
        return (
          <div>
            <div style={{minWidth: '6em'}}>
              {field.label}:
            </div>
            <div className={panelStyles.nestedPanel}>
              {
                items.map((seq, index) => (
                    <div key={seq.id} className={panelStyles.nestedItem}>
                      <button
                          onClick={() => onSelect(seq.id)}
                          className={seq.id === selectedID ? buttonStyles.activeButton : buttonStyles.button}
                      >
                        {seq.name}
                      </button>
                      <div style={{minWidth: '1em'}} />
                      <button onClick={() => handleDelete(items, index)}>
                        Delete
                      </button>
                    </div>
                ))
              }
          </div>
            <button
                onClick={() => {
                  const newItem = {
                    id: crypto.randomUUID(),
                    ...Object.fromEntries(
                        field.fields.map(f => [f.key, f.defaultValue])
                    )
                  };
                  onChange([...items, newItem]);
                }}>
              Add {field.label}
            </button>
        </div>
      )}

      return (
          <></>
      );
    }
    default:
      return null;
  }
}
export default FieldEditor;
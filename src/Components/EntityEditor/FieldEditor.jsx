import React from "react";
import panelStyles from '../../Styles/Panels.module.css';

function FieldEditor({field, value, onChange}) {

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
      return (
          <div className={panelStyles.field}>
            <div style={{minWidth: '6em'}}>
              {field.label}:
            </div>
            <div className={panelStyles.nestedPanel}>
            {items.map((item, index) => (
                <div key={index} className={panelStyles.nestedItem}>
                  {field.fields.map(subField => (
                      <FieldEditor
                          key={subField.key}
                          field={subField}
                          value={item[subField.key]}
                          onChange={subValue => {
                            const updated = [...items];
                            updated[index] = {
                              ...item,
                              [subField.key]: subValue
                            };
                            onChange(updated);
                          }}
                      />
                  ))}
                  <div style={{minWidth: '1em'}} />
                  <button onClick={()=>handleDelete(items, index)}>Delete</button>
                </div>
            ))}

            <button
                onClick={() => {
                  const newItem = Object.fromEntries(
                      field.fields.map(f => [f.key, f.defaultValue])
                  );
                  onChange([...items, newItem]);
                }}>
              Add {field.label}
            </button>
          </div>
        </div>
      );
    }
    default:
      return null;
  }
}
export default FieldEditor;
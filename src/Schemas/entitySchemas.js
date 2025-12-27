export const entitySchemas = {
  character: {
    label: 'Character',
    fields: [
      { key: 'name', label: 'Name', type: 'text', defaultValue: 'New Character' },
    ]
  },
  item: {
    label: 'Item',
    fields: [
        { key: 'name', label: 'Name', type: 'text', defaultValue: 'New Item' },
        { key: 'description', label: 'Description', type: 'text', defaultValue: '' },
    ]
  },
  scene: {
    label: 'Scene',
    fields: [
        { key: 'name', label: 'Name', type: 'text', defaultValue: 'New Scene'},
        { key: 'description', label: 'Description', type: 'text', defaultValue: ''},
        { key: 'story', label: 'Story', type: 'text', defaultValue: '' },
    ]
  },

  createEntity(entitySchema) {
    return {
      id: crypto.randomUUID(),
      ...Object.fromEntries(
        entitySchema.fields.map(
          field => [field.key, field.defaultValue]
        )
      ),
    };
  },
};

export default entitySchemas;
import entitySchemas from "../Schemas/entitySchemas.js";

export const createNewCharacter = (list, setList) => {
  return createNewEntity(entitySchemas.character, "New Character", list, setList);
}

export const createNewItem = (list, setList) => {
  return createNewEntity(entitySchemas.item, "New Item", list, setList);
}

export const createNewScene = (list, setList) => {
  return createNewEntity(entitySchemas.scene, "New Scene", list, setList);
}

export const createNewEntity = (schema, entityName, list, setList) => {
  const entity = entitySchemas.createEntity(schema);
  const safeEntityName = entityName.trim() || 'new entity';
  entity.name = safeEntityName;
  entity.id = getUniqueId(safeEntityName, list);
  setList([...list, entity]);
  return entity;
}

const getUniqueId = (name, list) => {
  const baseId = name.toLowerCase().replace(/\s+/g, "_");
  const exists = list.find(item => item.id === baseId);
  return !exists
      ? baseId
      : getNextUniqueId(baseId, 1, list);
}

const getNextUniqueId = (baseId, index, list) => {
  const id = `${baseId}_${index}`;
  const exists = list.find(item => item.id === id);
  if (exists) return getNextUniqueId(baseId, index + 1, list);
  return id;
}
const localStorageDataKey = 'writerData';

export const saveDataToLocalStorage = (characterList, itemList, sceneList) => {
  const serializedEntities = serializeEntities(characterList, itemList, sceneList);
  localStorage.setItem(localStorageDataKey, serializedEntities);
}

export const retrieveDataFromLocalStorage = () => {
  try{
    const data = localStorage.getItem(localStorageDataKey);
    return deserializeEntities(data);
  }
  catch(e) {
    console.error('Error retrieving saved data.', e);
    return {characters: [], items: [], scenes: []};
  }
}

const serializeEntities = (characters, items, scenes) => {
  return JSON.stringify({
    characters: characters,
    items: items,
    scenes: scenes,
  });
};

const deserializeEntities = (jsonData) => {
  const entities = JSON.parse(jsonData);
  return {
    characters: entities.characters,
    items: entities.items,
    scenes: entities.scenes,
  };
}
import JSZip from "jszip";
import {parsePassages} from "./PassageParser.js";

const localStorageDataKey = 'writerData';

export const exportData = (characterList, itemList, sceneList) => {
  const zip = new JSZip();

  const addFileToZip = (filename, data) => {
    const json = JSON.stringify(data, null, 2);
    zip.file(filename, json);
  }

  addFileToZip('characters.json', characterList);
  addFileToZip('items.json', itemList);

  sceneList.forEach(scene => {
    const sceneData = {
      ...scene,
      sequences: scene.sequences.map(seq => {
        return {
          ...seq,
          passages: parsePassages(seq.text)
        };
      })
    };
    addFileToZip(`scene_${scene.id}.json`, sceneData);
  });

  zip.generateAsync({type: 'blob'})
      .then(function(content) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = 'exported_data.zip';
        link.click();
      })
};

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
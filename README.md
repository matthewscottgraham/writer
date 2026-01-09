# Writer

### The Pitch
An interactive writing tool designed to take a game narrative from initial 
white-box all the way to the final story. Users will write in plain text with 
minimal markup, and the tool should automatically organize items, characters, 
non-linear sequences of dialogue, cutscenes, and interaction events. It should
also prepare tables for localization. The resulting data should be exported
directly to a game engine, enabling the creation of new level block-outs or 
updating existing data.

### Current Progress
#### Prototype
The prototype is a quickly designed app to prove that it is possible to write in 
plain text with minimal markup, have the text parsed into objects and export the
data. 

The prototype currently has dictionaries of entities for Characters, scenes and 
items and allows for creation, editing, and deletion of the entities.
It also allows for creation of sequences within a scene, which are a collection
of passages. Each passage is displayed as a text bubble with any valid tags in
the preview panel.

The prototype saves data to the local storage, and can export everything as a 
zip for importing into Unity.

Also see the Unity Integration project: https://github.com/matthewscottgraham/Writer_UnityIntegration

<p align="center">
	<img src="images/screenshotA.jpg" alt="Screenshot A" height="300"/>
</p>

### How to Run
npm run dev
#### Dependencies
* Node.js
* npm

### How to Use
* Create a new scene
* Create a sequence in the scene
* Type in the big text area of the sequence editor.
    * Tags are formatted like this: <key=value>. They can be placed anywhere within a passage
    * A blank line is treated as a passage break.
* Export as a zip folder with the export button in the top left.
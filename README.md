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
The program currently allows for creation, editing, and deletion of entities
such as characters, items and scenes. It features a sidebar for selecting 
entities and a work area that dynamically displays any editors for the selected 
entity. It does not support narrative parsing, data validation, localisation or 
serializing / deserializing.

<p align="center">
	<img src="images/screenshotA.jpg" alt="Screenshot A" height="250"/>
</p>

### How to Run
#### Dependencies
* Node.js
* npm

npm run dev
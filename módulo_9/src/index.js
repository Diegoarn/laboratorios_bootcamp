
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";
import "./styles.css";

DataBusiness.getCharacters().then(characters => {
    const nodes = [];
    for (let character of characters) {
        const node = Utils.createCharacterRow(character);
        node.onclick = function () {
            DataBusiness.getTypeCharacters(character.char_id).then(charactersId => {
                Utils.showCharacter(charactersId);
            });
    
    }
        nodes.push(node);
    }
    for (let node of nodes) {
        document.getElementById("root").append(node);
      
    }
});


function getCharacters() {
    return fetch("https://www.breakingbadapi.com/api/characters").then(response =>
    response.json()
    );
   }


   function getTypeCharacters(id) {
    return fetch("https://www.breakingbadapi.com/api/characters/" + id).then(response =>
    response.json()
    );
   }

   export {getCharacters, getTypeCharacters}
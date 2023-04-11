/* 1. Take user input or randomize words for MadRick Puzzle
 * 2. Once inputs are received, generate puzzle with inputs
 * 3. Allow user to play again
 *
 * To Do:
 * Come up with about 5 puzzles based on specific episodes.
 * Link the API to show the characters, specific locations, and which
 * episode each puzzle is from.
 */

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((responseJson) => console.log(responseJson.results));
const characters = document.getElementById("profile-pic");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((responseJson) => {
    for (let { name, image } of responseJson.results) {
      //   console.log(name);
      //   console.log(image);
      const characterPic = document.createElement("img");
      characterPic.setAttribute("src", image);
      const characterName = document.createElement("p");
      characterName.innerText = name;
      characters.append(characterPic);
      characters.append(characterName);
    }
  });

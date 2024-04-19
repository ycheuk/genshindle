// classic.js

let randomCharacter; // Declare a variable to store the randomly chosen character

function initializeGame() {
    const characterKeys = Object.keys(characterInfo);
    randomCharacter = characterInfo[characterKeys[Math.floor(Math.random() * characterKeys.length)]];
}

function checkGuess() {
    const userInput = document.getElementById("characterInput").value.trim().toLowerCase();

    if (!randomCharacter) {
        initializeGame(); // Generate a random character if it's not already generated
    }

    if (userInput === randomCharacter.name.toLowerCase()) {
        document.getElementById("result").innerText = "Congratulations! You guessed the character correctly!";
        randomCharacter = null; // Reset randomCharacter after correct guess
    } else {
        const traitsUserGuessed = getCharacterTraits(userInput);
        const traitsNamesRow = document.getElementById("traitNamesRow");
        const traitsValuesRow = document.getElementById("traitValuesRow");
        traitsNamesRow.innerHTML = generateTraitsNamesRow();
        traitsValuesRow.innerHTML = generateTraitsValuesRow(traitsUserGuessed);
    }
}

function getCharacterTraits(characterName) {
    const character = characterInfo[characterName.toLowerCase()];
    return character;
}

function generateTraitsNamesRow() {
    let rowHTML = "";
    for (const trait in randomCharacter) {
        if (trait !== "name") {
            rowHTML += `<td>${trait}</td>`;
        }
    }
    return rowHTML;
}

function generateTraitsValuesRow(character) {
    let rowHTML = "";
    for (const trait in character) {
        if (trait !== "name") {
            const isMatching = character[trait] === randomCharacter[trait];
            const backgroundClass = isMatching ? "green-background" : "red-background";
            rowHTML += `<td class="${backgroundClass}">${character[trait]}</td>`;
        }
    }
    return rowHTML;
}

// Initialize the game when the page loads
initializeGame();

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
        displayCharacterTraits(traitsUserGuessed);
    }
}

function getCharacterTraits(characterName) {
    const character = characterInfo[characterName.toLowerCase()];
    return character;
}

function displayCharacterTraits(character) {
    const traitsTable = document.getElementById("traitsTable");

    // Create a new row for trait names if it's the first guess
    if (traitsTable.rows.length === 0) {
        const traitNamesRow = traitsTable.insertRow();
        for (const trait in randomCharacter) {
            if (trait !== "name") {
                traitNamesRow.insertCell().textContent = trait;
            }
        }
    }

    // Create a new row for trait values for the guessed character
    const traitValuesRow = traitsTable.insertRow();
    for (const trait in character) {
        if (trait !== "name") {
            const isMatching = character[trait] === randomCharacter[trait];
            const backgroundClass = isMatching ? "green-background" : "red-background";
            const cell = traitValuesRow.insertCell();
            cell.textContent = character[trait];
            cell.classList.add(backgroundClass);
        }
    }
}

// Initialize the game when the page loads
initializeGame();

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
        const traitsTable = generateTraitsTable(traitsUserGuessed);
        document.getElementById("traitsTable").innerHTML = traitsTable;
    }
}

function getCharacterTraits(characterName) {
    const character = characterInfo[characterName.toLowerCase()];
    return character;
}

function generateTraitsTable(character) {
    let tableHTML = "<tr><th>Trait</th><th>Value</th></tr>";
    for (const trait in character) {
        if (trait !== "name") {
            const isMatching = character[trait] === randomCharacter[trait];
            const backgroundClass = isMatching ? "green-background" : "red-background";
            tableHTML += `<tr><td>${trait}</td><td class="${backgroundClass}">${character[trait]}</td></tr>`;
        }
    }
    return tableHTML;
}

// Initialize the game when the page loads
initializeGame();

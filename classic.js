let randomCharacter;

function initializeGame() {
    const characterKeys = Object.keys(characterInfo);
    randomCharacter = characterInfo[characterKeys[Math.floor(Math.random() * characterKeys.length)]];
}

function checkGuess() {
    const userInput = document.getElementById("characterInput").value.trim().toLowerCase();

    if (!randomCharacter) {
        initializeGame();
    }

    if (userInput === randomCharacter.name.toLowerCase()) {
        document.getElementById("result").innerText = "Congratulations! You guessed the character correctly!";
        randomCharacter = null;
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

    if (traitsTable.rows.length === 0) {
        const traitNamesRow = traitsTable.insertRow();
        for (const trait in randomCharacter) {
            if (trait !== "name") {
                traitNamesRow.insertCell().textContent = trait;
            }
        }
    }

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

initializeGame();

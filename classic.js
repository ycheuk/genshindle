// classic.js

function checkGuess() {
    const userInput = document.getElementById("characterInput").value.trim().toLowerCase();

    // Randomly choose a character from characterInfo object
    const characterKeys = Object.keys(characterInfo);
    const randomCharacter = characterInfo[characterKeys[Math.floor(Math.random() * characterKeys.length)]];

    if (userInput === randomCharacter.name.toLowerCase()) {
        document.getElementById("result").innerText = "Congratulations! You guessed the character correctly!";
    } else {
        const traitsUserGuessed = getCharacterTraits(userInput);
        const traitsRandomCharacter = getCharacterTraits(randomCharacter.name);
        document.getElementById("result").innerText = `You guessed "${userInput}" but it's not correct. Here are the traits:\n\n${traitsUserGuessed}\n\nHere are the traits of the randomly chosen character:\n\n${traitsRandomCharacter}`;
    }
}

function getCharacterTraits(characterName) {
    const character = characterInfo[characterName.toLowerCase()];
    let traits = `Name: ${character.name}\n`;
    traits += `Weapon: ${character.weapon}\n`;
    traits += `Element: ${character.element}\n`;
    traits += `Region: ${character.region}\n`;
    // Add more traits as needed
    return traits;
}

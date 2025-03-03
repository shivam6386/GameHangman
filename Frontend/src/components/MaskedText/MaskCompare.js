export function getMaskedString(originalWord, guessedLetters) {
    console.log("guessedLetters", guessedLetters)
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase()); // ['h', 'M', 'e'] ->['H', 'M', 'E']

    const guessedLetterSet = new Set(guessedLetters); // {'H', 'M', 'E'}


    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSet.has(char)) {
            return char;
        } else {
            return "_";
        }
    }); // ['H', '_', 'M', '_', '_', 'E']

    return result;
}
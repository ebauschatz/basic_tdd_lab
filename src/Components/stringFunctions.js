function capitalizeFirstLetter(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function concatenateTwoWords(wordOne, wordTwo) {
    return wordOne + wordTwo;
}

function getSecondWord(text) {
    let words = text.split(" ");
    return words[1];
}

export {capitalizeFirstLetter, concatenateTwoWords, getSecondWord}
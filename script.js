

let dictionary = {
    arrOfTime: ['Today', 'Tonight', 'Tomorow', 'Next year', 'In two weeks'],
    arrOfVerbs: ['you will', 'you schould', 'you must'],
    arrOfActions: ['be blinded by passion', 'have a lot of fun', 'see a ghoast', 'sleep a lot', 'have a great success', 'get what you want']
}

const findRandomElement = (arr) => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
};

const createAMessage = (obj) => {
    let message = [];
    for (let element in obj) {
        message.push(findRandomElement(dictionary[element]));
    }
    return message.join(' ');
}
console.log(createAMessage(dictionary));

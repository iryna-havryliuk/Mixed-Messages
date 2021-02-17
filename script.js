let arrOfTime = ['Today', 'Tonight', 'Tomorow', 'Next year', 'In two weeks'];
let arrOfVerbs = ['you will', 'you schould', 'you will', 'you must'];
let arrOfActions = ['be blinded by passion', 'have a lot of fun', 'see a ghoast', 'sleep a lot', 'have a great success', 'get what you want'];


const findRandomElement = (arr) => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
};
//console.log(findRandomElement(arrOfTime));


let randTime = findRandomElement(arrOfTime);
let randVerb = findRandomElement(arrOfVerbs);
let randAction = findRandomElement(arrOfActions);

let message = randTime + ' ' + randVerb + ' ' + randAction + '.';
console.log(message);
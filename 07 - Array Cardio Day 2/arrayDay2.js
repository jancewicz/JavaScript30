// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

// some return true if any of the element of the array meet provided circumstances 
const isMature = people.some((person) => {
    const currentYear = (new Date()).getFullYear();
    return (currentYear - person.year >= 19);
});

// every returns true if every element of the array meets provided circumstances

const isEveryoneOlder = people.every((guy) => {
    const currentYear = (new Date()).getFullYear();
    return (currentYear - guy.year >= 19);
});
//console.log(isEveryoneOlder);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findElement = comments.find((comment) => {
    return comment.id === 823423;
});
//console.log(findElement);



// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((text) => {
    return text.id === 823423;
});
console.log(index); // returns index 1 as ID 823423 is 2nd element of the comments array

comments.splice(index, 1);
//console.table(comments);


// another way to do this :

// const newComments = [
//     ...comments.slice(0, index),
//     ...comments.slice(index + 1)
// ]

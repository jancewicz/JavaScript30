// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// Because result is appended with value when if true is returned, we can skip whole if / else statement and just 
// write our return true part of code.
const result = inventors.filter((inventor) => (inventor.year >= 1500 && inventor.year <= 1599));


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullNames = inventors.map((inventor1) => inventor1.first + " " + inventor1.last);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// const sortedInventors = inventors.sort(function (a, b) {
//     if (a.year > b.year) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// This line does the same
const sortedInventors = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sumYears = inventors.reduce((total, inventor2) => {
    return total + (inventor2.passed - inventor2.year);
}, 0) // this zero is a point where we want to start our acumulator counter -> we're starting from 0


// 5. Sort the inventors by years lived

const sortByYearsLived = inventors.sort((a, b) => {
    const lastInvestor = a.passed - a.year;
    const nextInvestor = b.passed - b.year;
    return lastInvestor - nextInvestor;
})
//console.log(sortByYearsLived);
// OR YOU CAN CODE IT like this:

const sortedYears = inventors.sort((x, y) => {
    lastGuy = x.passed - x.year;
    nextGuy = y.passed - y.passed;
    return lastGuy > nextGuy ? 1 : -1;
})
//console.log(sortedYears);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedByLastName = people.sort((c, d) => {
    const lastNameC = c.split(", ")[0];
    const lastNameD = d.split(", ")[0];
    return (lastNameC > lastNameD ? 1 : -1);
})
//console.log(sortedByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];


const sumData = data.reduce((obj, element) => {
    if (!obj[element]) {
        obj[element] = 0;
    }
    obj[element]++;
    return obj;
}, {});

console.log(sumData);

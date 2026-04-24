let number = [6, 1, 8, 2, 3, 5];
//simple way

// console.log(number);
// number.sort();
// console.log(number);

// const friends = ['adnan', 'faysal', 'nakib', 'akib', 'fakib'];
// friends.sort();
// console.log(friends);


//complex way
const age = [1, 5, 100, 15, 60, 12, 15];
const sorted = age.sort(function (a, b){return a-b});
console.log(sorted);

// desending
const sortedDesending = age.sort(function (a, b){return b-a});
console.log(sortedDesending);
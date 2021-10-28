
const firstName = 'Shema'
const year = 2021;
const birthYear = 1988;
const job = "teacher";

//This way displays on one line.
const shema = "I'm " + firstName + ', a ' + (year - birthYear)
+ ' year old ' + job + '!';
console.log(shema);

//This way splits the sentence into two lines
const shemaNew = `I'm ${firstName}, a ${year - birthYear} 
year old ${job} !`
console.log(shemaNew);
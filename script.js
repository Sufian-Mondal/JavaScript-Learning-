/*
let countryName = "Bangladesh";
let countryPopulation = ("10 cr");
let capitalCity = "dhaka";
console.log(countryName);
console.log(countryPopulation);
console.log(capitalCity);
*/

//data type learning
/*
let fristName = "shimul";
console.log(fristName);
console.log(fristName);
console.log(fristName);


let martuza_shimul = "MS";
let $function = 27;

let person = "shimul";
let PI =3.1416;

let myFristJob ="coder";
let myCurrentJob = "devloper";

console.log(myFristJob);
console.log(myCurrentJob);

//most use data type example

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(javascriptIsFun);
console.log(typeof 23);
console.log(typeof "shimul");


javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//undefined examples
let year;
console.log(year);
console.log(typeof year);

year = 1994
console.log(typeof "year");

console.log(typeof null);



//variable declarations

let age = 30;
age = 31;

const birthYear = 1994;
birthYear = 1993;
*/

//mathmatical operator
/*
const now = 2037;
const ageJonas = now - 1994;
const ageSarah = now-2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10.2 ** 3);//2** means 2 to the power 3

const fristName ="jonas";
const lastName = "bappy";
console.log(fristName +' '+ lastName);

//math operator

let x = 10+5;
x+= 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


//comparison Operator
const ageSarah = 18;
console.log(now-1991 > now-2018);


//operator presidence

const now = 2037;
const ageJonas = now-1991;
const ageSarah = now-2018;
console.log(now-1991>now-2018);

let x,y;
x=y=25-10-5;//x=y=10;x=10
console.log(x,y);

const averageAge =(ageJonas + ageSarah)/2;
console.log(ageJonas, ageSarah, averageAge);


const massMark = 78;
const markHeight = 1.69;
const massJohn = 95;
const johnHeight = 1.76;

const BMImark = massMark / markHeight**2;
const BMIjohn = massJohn / (johnHeight * johnHeight);
const markHigherBMI = BMImark > BMIjohn;


console.log(BMImark, BMIjohn, markHigherBMI);



const fristName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + fristName + ' , a ' + (year-birthYear)+ " years old " + job +"!";
console.log(jonas);

console.log('just a regular string');
console.log('string with \n\
multiple \n\
action');

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher tharn Mark's (${BMIMark})!`);
}


//Logical Operator AND,OR,NOT

const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision); 
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision){
  console.log('sarah is able to drive');
} else {
  console.log('someone should drive');
}

const isTired = false; //C

console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && isTired){
  console.log('sarah is able to drive');
}else {
  console.log('someone else drive!');
}


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas){
//   console.log('dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins){
//   console.log('koalas win the trophy');
// } else if (scoreDolphins===scoreKoalas){
//   console.log('both win the trophy!');
// }

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("both win the trophy!");
} else {
  console.log("No one win the trophy!");
}


const day = 'monday'

switch(day){
  case 'monday': //day === 'monday'
  console.log('preparing theory videos');
  console.log('go to conding meetup');
  break;
  case 'tuesday':
    console.log('plan conding structure');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('go to office');
    break;
  case 'friday':
    console.log('record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('enjoy the weekend');
    break;
  default:
    console.log('not a valid day!');
}

if (day === 'monday'){
  console.log('plan course structure');
  console.log('go to the coding meetup');
} else if (day === 'tuesday') {
  console.log('preparing theory');
} else if (day === 'wednesday' || day === 'thursday'){
  console.log('write code example');
} else if (day === 'friday'){
  console.log('records videos!');
 } else if (day === 'saturday' || day === 'sunday'){
  console.log('enjoy the weekend');
 } else {
  console.log('not a valid day!')
 }
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);

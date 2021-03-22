function calcAge1(birthYear) {
   return 2037 - birthYear;
}
const age1 = calcAge1(1991);


const calcAge2 = function (birthYear) {
   return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

console.log(calcAge1(1992), calcAge2(1992));

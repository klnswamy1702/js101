function calcAge(birthYear,firstName) {
    const age = 2037 - birthYear;
    console.log(`${firstName} is ${age} years old`); 
    return age;
}


const age1 = calcAge(1991, 'Jonas');

'use strict';
/*console.log(this);

const calcAge = function(birthyear){
    console.log(2037-birthyear);
    console.log(this);
};
calcAge(1991);


const calcAgeArrow = birthyear => {
    console.log(2037-birthyear);
    console.log(this);
};
calcAgeArrow(1980);
*/

const swamy= {
    firstName: 'LNSwamy',
    lastName: 'Karampuri',
    age: 19,
    job: 'student',
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037-this.year);
    }
}
swamy.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = swamy.calcAge;
matilda.calcAge();


//const f = swamy.calcAge;
//f();
const Mark = {
    fullName: 'Mark miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
    this.bmi = this.mass/(this.height*this.height);
    return this.bmi;
}
};

const John = {
    fullName: 'John Smith',
    mass:  92,
    height: 1.95,
    calcBMI: function () {
    this.bmi = this.mass/(this.height*this.height);
    return this.bmi;
}
};

Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi);


if (Mark.bmi>John.bmi) {
    console.log(`Mark miller ${Mark.bmi} has higher bmi than John Smith ${John.bmi}`); 
}
if (Mark.bmi<John.bmi) {
    console.log(`John Smith ${John.bmi} has higher bmi than Mark miller ${Mark.bmi}`); 
}
'use strict';
function calcTip(bill) {
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2
}
const bills=[22, 295, 176,440];
const tips=[];
const totals=[];
for ( let i=0; i<bills.length; i++) {
const tip= calcTip(bills[i]);
tips.push(tip);
totals.push(tip+bills[i]);
}

console.log(bills, tips,totals);


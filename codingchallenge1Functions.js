const calcAverage = (a, b, c) => (a+b+c)/3;

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(`Dolphins won the trophy`);
}else if (scoreKoalas >= 2 * scoreDolphins) {
    console.log(`Koalas won the Trophy`);
}else{
    console.log(`No one won the Trophy`);
}
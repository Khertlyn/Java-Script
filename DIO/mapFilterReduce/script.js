/*
const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}
function mapComThis(arr, thisArg) {
    return arr.map(function(item){
       return item * this.value;
    }, thisArg);
}
const nums = [1, 2];

console.log('this -> maca', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));
*/

/*function mapSemthis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}
const nums = [2, 4 , 6 ,8, 10];
console.log(mapSemthis(nums));
console.log(nums);*/

/*function filterPar(arr){
    return arr.filter(callback)
    }
function callback(item){
    return item % 2 === 0;
}
const meuArray = [2, 5 , 6 ,8, 11];
console.log(filterPar(meuArray));
console.log(meuArray);*/

/*function somaNumeros(arr) {
   return arr.reduce(function(prev, current){
       console.log({ prev });
       console.log({ current });       
        return prev + current;
    },0);
}
const arr = [1, 2];
console.log(somaNumeros(arr));*/

const listaPreco = [
    {
        name: 'sabao em po',
        preco: 30,
     },
     {
        name: 'cereal',
        preco: 12,
     },
     {
        name: 'toalha',
        preco: 30,
     }
    ];
const saldoDisponivel = 100;
function calculaSaldo(saldoDisponivel, lista) {
    return listaPreco.reduce(function (prev, current, index){
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });       
         return prev - current.preco;
     },saldoDisponivel);
 }
 console.log(calculaSaldo(saldoDisponivel,listaPreco));
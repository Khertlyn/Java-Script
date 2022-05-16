/*function verificaPalindromo(string){
    if(!string) return;
    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));*/


//solução 2

/*function verificaPalindromo2(string){
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]){
        return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("ama"));

*/


//atividade 2

function trocaPar(array){
    if (!array.length) return -1;
    for (let i = 0; i < array.length; i++){
        if(array[i] === 0) {
            console.log("você já é zero");
        } else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0`);
            array [i] = 0;
        }
    }
    return array;
}
let arr = [1,3,4,6,80,33,23,90];
console.log(trocaPar([]));

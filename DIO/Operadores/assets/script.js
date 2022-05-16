/*function comparaNumeros(num1, num2){
    if (!num1 || !num2) return 'Defina dois números';
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return '${primeiraFrase} ${segundaFrase}';
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais ='';

    if(num1 !== num2) {
        saoIguais = 'não';
    }
return 'os números ${num1} e ${num2} ${saoIguais}  sao iguais.';
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 =  'maior';
    }
    
    if(compara20){
        resultado20 =  'maior';
    }
return 'Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20';
}
console.log(comparaNumeros(1,1));*/

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));
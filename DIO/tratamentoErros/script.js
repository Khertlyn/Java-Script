function validaArray(arr, num) {
    try{
    if(!arr && !num) throw new ReferenceError("envie os parâmetros");
    
    if(typeof arr !== 'object') 
        throw new TypeError('Array precisa ser objeto');
    
    if(typeof num !== 'number') 
        throw new TypeError('Num precisa ser número');
    
    if (arr.length !== num) 
        throw new RangeError ('Tamanho inválido');
    
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError) {
            console.log('Este erro é um reference error');
            console.log(e.name);
            console.log(e.message);
        }
        else if(e instanceof TypeError) {
            console.log('Este erro é um type error');
            console.log(e.name);
            console.log(e.message);
        }
        else if(e instanceof RangeError) {
            console.log('Este erro é um range error');
            console.log(e.name);
            console.log(e.message);
        }
        else {
            console.log('tipo de erro não esperado' + e);
        }
    }
}
arr = [1, 2, 3, 4, 5];
num = 5;
console.log(validaArray(arr, num));

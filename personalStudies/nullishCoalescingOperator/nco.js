// Nullish Coalecing Operator

const idade = null;
console.log("Sua idade é:", idade || 'Não informado') 
// return 'Não informado'


idade = 0;
console.log("Sua idade é:", idade || 'Não informado') 
// return > 'Não informado'

/*  Valores considerados Nulos:
        0, '', [], false, undefined, null => falsy 
*/

// Usando o Nullish Colecing

idade = undefined;
console.log("Sua idade é:", idade ?? 'Não informado') 
// return > 0
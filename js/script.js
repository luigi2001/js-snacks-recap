
const numeri = [11,22,34,45,58,69,76,88,99,10];

const nuovo = [];

let a = parseInt(prompt('inserisci il primo indice (A):' + numeri.length));

let b = parseInt(prompt('inserisci il secondo indice (B):' + numeri.length));

numeri.forEach((element) =>{
    if(a > b || b > element.length){
        alert('Attenzione! indice A deve essere più piccolo di indice B oppure hai inserito un indice B maggiore');

        a = parseInt(prompt('inserisci il primo indice (A):' + element.length));
    
        b = parseInt(prompt('inserisci il secondo indice (B):' + element.length));
    
    }
});

for(let i = a - 1; i < b; i++){
    nuovo.push(numeri[i]);
}

console.log(nuovo);

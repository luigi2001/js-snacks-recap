
const numeri = [11,22,34,45,58,69,76,88,99,10];

const nuovo = [];

let a = parseInt(prompt('inserisci il primo indice (A):' + numeri.length));

let b = parseInt(prompt('inserisci il secondo indice (B):' + numeri.length));

numeri.forEach((element,index) =>{
    if(a > b || b > element.length){
        alert('Attenzione! indice A deve essere più piccolo di indice B oppure hai inserito un indice B maggiore');

        a = parseInt(prompt('inserisci il primo indice (A):' + element.length));
    
        b = parseInt(prompt('inserisci il secondo indice (B):' + element.length));
    
    } else if(index >= a && index <= b){
        nuovo.push(element);
    }
});

console.log(nuovo);
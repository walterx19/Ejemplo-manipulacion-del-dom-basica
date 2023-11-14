const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//escucha los eventos lleva 2 parametros 1° nombre de evento y 2° la funcion a ejecutar y no lleva parentesis
//tiene que saber de que elemento html se habla.
form.addEventListener('submit',sumarInputValues);//escucho el elmento form y el evento y le pasa 1 parametro a la funcion

/*function sumarInputValues(event) {
   // console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText="Resultado: "+ sumaInputs;
    
}*/
function sumarInputValues(event) {
   // console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText="Resultado: "+ sumaInputs;
    
}
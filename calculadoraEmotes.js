// Precio * 1.05 + 0.30
// resultado seria el precio del emote total, contando los fees dde la transaccion.
// calcularPrecioTotal();


//Declaramos variables

const boton = document.querySelector('.boton-principal');
const section = document.querySelector('.section');
const inputPrecio = document.querySelector('#inputPrecio');
let inputPrecioValue = 0;   //Variable global que usare para asignarle el valor de una variable local dentro de un evento.
let pagoNumero = 1;

//Agregamos evento para guardar lo escrito por el usuario
inputPrecio.addEventListener('change', function(e){
     inputPrecioValue = e.target.value;
});

//Funcion para  calcular precio del cliente
function calcularPrecio(precio){
    const precioTotal = (precio*1.05)+1;
    return precioTotal;
}
//Evento boton
boton.addEventListener('click', function(e){

    //Validamos el input
    if (inputPrecioValue == 0){
        const parrafoPrecio = document.createElement('P');
        parrafoPrecio.classList.add('error');
        parrafoPrecio.textContent= `El campo debe tener un numero `;
        section.appendChild(parrafoPrecio);
        setTimeout(() => {
            parrafoPrecio.remove();
        }, 5000);
        return;
    }
    //Agrega parrafo para mostrar precio
    const parrafoPrecio = document.createElement('P');
    parrafoPrecio.classList.add('parrafoPrecio', 'wd-100');
    parrafoPrecio.textContent= `El pago ${pagoNumero} total del cliente debe ser de $${calcularPrecio(inputPrecioValue)}`;
    pagoNumero ++;
    section.appendChild(parrafoPrecio);

    //evento para crear boton de borrar resultados.
    const botonDel = document.createElement('BUTTON');
    botonDel.classList.add('botonDel');
    botonDel.textContent = 'Elimina contenidos'
    botonDel.type= 'submit';
    section.appendChild(botonDel);

    //evento click boton borrar resultados
    botonDel.addEventListener('click', function(e){
        parrafoPrecio.remove(); //Borramos parrafo precio
        botonDel.remove(); //Borramos el mismo boton para eliminar.
        pagoNumero --;
        console.log(parrafoPrecio);
    })
    
});



//Se puede reducir el codigo creando una funcion para crear elementos en html.



//Boton para eliminar parrafo



/* function calcularPrecioTotal(){

    var precio = document.querySelector("#inputPrecio");
    var precioTotal = calcularPrecio(precio.value);
    var parrafo = document.querySelector("#result");
    parrafo.innerText= "El pago total del cliente debe ser de  $"+precioTotal+" USD";

} */




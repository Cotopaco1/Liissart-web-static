// Precio * 1.05 + 0.30
// resultado seria el precio del emote total, contando los fees dde la transaccion.
// calcularPrecioTotal();

function calcularPrecio(precio){

    const precioTotal = (precio*1.05)+1;

    return precioTotal;

}

function calcularPrecioTotal(){

    var precio = document.getElementById("inputPrecio");
    var precioTotal = calcularPrecio(precio.value);

    var parrafo = document.getElementById("result");

    parrafo.innerText= "El pago total del cliente debe ser de  $"+precioTotal+" USD";

}

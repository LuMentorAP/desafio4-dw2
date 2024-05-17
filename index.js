let precio = prompt('Cuanto sale este tenedor?');
let cantidad = prompt('Cuantos queres llevar?');

function sumarProductos(precioUnitario, cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}

let valorFinal = sumarProductos(precio, cantidad);

alert(`Tenes que pagar ${valorFinal}`);
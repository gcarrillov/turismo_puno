// Definir los sitios turísticos con sus respectivos montos mínimos
const sitiosTuristicos = [
    { nombre: "Lago Titicaca", montoMinimo: 50, url: "sitios_turisticos.html#lago-titicaca" },
    { nombre: "Isla Taquile", montoMinimo: 70, url: "sitios_turisticos.html#isla-taquile" },
    { nombre: "Sillustani", montoMinimo: 40, url: "sitios_turisticos.html#sillustani" },
    { nombre: "Catedral de Puno", montoMinimo: 20, url: "sitios_turisticos.html#catedral-puno" },
    { nombre: "Chullpas de Cutimbo", montoMinimo: 30, url: "sitios_turisticos.html#chullpas-cutimbo" }
];

// Función para filtrar los sitios turísticos según el monto ingresado
function filtrarSitios() {
    const monto = document.getElementById('monto').value;
    const sitiosFiltrados = sitiosTuristicos.filter(sitio => sitio.montoMinimo <= monto);

    if (sitiosFiltrados.length > 0) {
        let mensaje = "Con tu monto, puedes visitar los siguientes lugares:\n";
        sitiosFiltrados.forEach(sitio => {
            mensaje += `${sitio.nombre} (Monto mínimo: S/. ${sitio.montoMinimo})\n`;
        });
        mensaje += "\nHaz clic en Aceptar para ver más detalles.";
        if (confirm(mensaje)) {
            window.location.href = sitiosFiltrados[0].url;
        }
    } else {
        alert("No hay sitios turísticos disponibles para el monto ingresado.");
    }
}

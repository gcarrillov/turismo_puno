// Definir los sitios turísticos con sus respectivos montos mínimos
const sitiosTuristicos = [
    { nombre: "La Isla de Amantani", montoMinimo: 60, url: "sitios_turisticos.html#amantani" },
    { nombre: "El Cementerio Sillustani", montoMinimo: 50, url: "sitios_turisticos.html#Sillustani" },
    { nombre: "El Cañon de Tijani", montoMinimo: 40, url: "sitios_turisticos.html#tijani" },
    { nombre: "Lampa Pukara", montoMinimo: 30, url: "sitios_turisticos.html#lampa" },
    { nombre: "Aramu Muro", montoMinimo: 30, url: "sitios_turisticos.html#aramu_muro" },
    { nombre: "Chullpas de Molloco", montoMinimo: 30, url: "sitios_turisticos.html#molloco" },
    { nombre: "La ciudad de Chucuito", montoMinimo: 30, url: "sitios_turisticos.html#site1" },
    { nombre: "Las Islas FLotantes de los Uros", montoMinimo: 30, url: "sitios_turisticos.html#uros" },
    { nombre: "El Museo Dreyer", montoMinimo: 20, url: "sitios_turisticos.html#dreyer" },
    { nombre: "El Cerrito Huajsapata", montoMinimo: 20, url: "sitios_turisticos.html#huajsapata"},
    { nombre: "Arco Deustua", montoMinimo: 10, url: "sitios_turisticos.html#site2" },
    { nombre: "Parque Pino", montoMinimo: 10, url: "sitios_turisticos.html#pino" },
    { nombre: "La Catedral", montoMinimo: 10, url: "sitios_turisticos.html#catedral" },
    { nombre: "El Mirador de Kuntur Wasi", montoMinimo: 10, url: "sitios_turisticos.html#kuntur" },
    { nombre: "El Mirador de Puma Uta", montoMinimo: 10, url: "sitios_turisticos.html#puma" },
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

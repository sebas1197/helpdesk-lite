const { validarTicket } = require("./ticketValidator");

const ticket = {
    asunto: "Problema con correo",
    descripcion: "El usuario no puede ingresar a su correo institucional.",
    prioridad: "ALTA"
};

const resultado = validarTicket(ticket);

if (resultado.valido) {
    console.log("Ticket válido.");
} else {
    console.log("Ticket inválido.");
    console.log(resultado.errores);
}
function validarTicket(ticket) {
    const errores = [];

    if (!ticket.asunto || ticket.asunto.trim().length < 3) {
        errores.push("El asunto debe contener al menos 3 caracteres.");
    }

    if (!ticket.descripcion || ticket.descripcion.trim().length < 10) {
        errores.push("La descripción debe contener al menos 10 caracteres.");
    }

    const prioridadesPermitidas = ["BAJA", "MEDIA", "ALTA"];

    if (!prioridadesPermitidas.includes(ticket.prioridad)) {
        errores.push("La prioridad ingresada no es válida.");
    }

    return {
        valido: errores.length === 0,
        errores
    };
}

function nueva(){
    console.log("Nueva función agregada en ticketValidator.js");
}

module.exports = {
    validarTicket,
    nueva
};
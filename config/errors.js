const ERRORS = [
    { code: "23502", type: "db", status: 400, message: "Campo requerido está vacío" }, 
    { code: "23505", type: "db", status: 400, message: "Entrada duplicada, ya existe este valor" }, 
    { code: "500", type: "server", status: 500, message: "Error interno del servidor" },
    { code: "404", type: "server", status: 404, message: "Recurso no encontrado" }, 
    { code: "22P02", type: "db", status: 400, message: "Tipo de datos inválido en la consulta" } 
];
export default ERRORS

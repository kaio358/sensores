const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "seu_usuario",
    password: "sua_senha",
    database: "seu_banco_de_dados"
});

module.exports = client
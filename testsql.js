// importa modulo sqlite3
const sqlite3 = require("sqlite3").verbose();

// crea/apri file database
let db = new sqlite3.Database("./test/turisti.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Database open");
});

// inserisci dati nella tabella
var provincia = "Catania";
var mese = "Luglio";
var n = "1";

db.run("INSERT INTO sicilia (provincia, mese, n) VALUES  (?, ?, ?)", [provincia, mese, n], function(err) {
    if (err) {
        return console.log(err.message);
    }
    console.log("Data insert correctly");
});

// mostra contenuto
let sql = "SELECT * FROM sicilia";
db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row);
    });
});

// chiudi database
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Database closed");
});
const sqlite3 = require("sqlite3").verbose();

function redirect() {
    var place;
    place = document.getElementById("places").value;

    if (place == "sicilia") {
        window.location.href = "insert_sicily.html";
    } else if (place == "italia") {
        window.location.href = "insert_italy.html";
    } else if (place == "estero") {
        window.location.href = "insert_foreign.html";
    }
}

function insert_sicily() {
    // collect data from the user
    var provincia = document.getElementById("provincia").value;
    var numero = document.getElementById("numero_sicilia").value;
    var mese = document.getElementById("mese_sicilia").value;
    
    // verify data
    if ( !provincia || !mese) {
        alert("Inserire i dati necessari");
        return;
    }

    if ( !numero || isNaN(numero) || numero == 0) {
        alert("Inserire un numero valido");
        return;
    }

    // insert data
    let db = new sqlite3.Database("./Final Project/Templates/turisti.db", sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Database aperto correttamente");
        return;
    });

    db.run("INSERT INTO sicilia (provincia, mese, n) VALUES (?, ?, ?)", [provincia, mese, numero], function(err) {
        if (err) {
            return console.error(err.message);
        }
        else {
            alert("Dati inseriti correttamente");
            return;
        }
    });

    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Database closed");
        return;
    });
}

function insert_italy() {
    var regione = "Abruzzo";
    var numero;
    var mese = "Giugno"
    regione = document.getElementById("regione").value;
    numero = document.getElementById("numero_italia").value;
    mese = document.getElementById("mese_italia").value;
    
    if (numero == null) {
        alert("Inserire un numero valido");
    }
}

function insert_foreign() {
    var paese;
    var numero;
    var mese = "Giugno";
    paese = document.getElementById("paese").value;
    numero = document.getElementById("numero_estero").value;
    mese = document.getElementById("mese_estero").value;

}
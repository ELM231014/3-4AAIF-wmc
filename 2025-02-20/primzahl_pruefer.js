function istPrimzahl(n) {
    if (isNaN(n) || n < 2 || !Number.isInteger(n)) {
        return { text: "Ungültige Primzahl", class: "neutral" };
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return { text: "Keine angegebene Primzahl", class: "invalid" };
        }
    }
    return { text: "Gültige Primzahl", class: "valid" };
}

function prüfen() {
    let eingabe = document.getElementById("zahl").value.trim();
    let ergebnisElement = document.getElementById("ergebnis");

    if (eingabe === "") {
        ergebnisElement.innerText = "Keine angegebene Primzahl";
        ergebnisElement.className = "invalid";
        return;
    }

    let zahl = parseInt(eingabe);
    let ergebnis = istPrimzahl(zahl);
    ergebnisElement.innerText = ergebnis.text;
    ergebnisElement.className = ergebnis.class;
}

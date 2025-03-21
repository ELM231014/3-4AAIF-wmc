// Funktion zur Umwandlung einer Zahl in eine römische Zahl
export function toRoman(num: number): string {
    // Überprüfung, ob die Eingabe eine gültige Zahl ist (zwischen 1 und 3999)
    if (typeof num !== 'number' || num <= 0 || num >= 4000) {
        throw new Error("Ungültige Eingabe: Die Zahl muss zwischen 1 und 3999 liegen");
    }

    // Liste der römischen Ziffern und ihrer entsprechenden Werte
    const romanNumerals: [string, number][] = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];

    let result = ""; // Ergebnis-String für die römische Zahl
    for (const [roman, value] of romanNumerals) {
        // Solange die Zahl größer oder gleich dem aktuellen Wert ist, wird die römische Ziffer hinzugefügt
        while (num >= value) {
            result += roman;
            num -= value; // Der Wert wird von der Zahl abgezogen
        }
    }
    return result; // Rückgabe der römischen Zahl
}

// Funktion zur Umwandlung einer römischen Zahl in eine Zahl
export function fromRoman(roman: string): number {
    // Überprüfung, ob die Eingabe ein gültiger römischer Zahl-String ist
    if (typeof roman !== 'string' || !/^[IVXLCDM]+$/.test(roman)) {
        throw new Error("Ungültige Eingabe: Es muss eine gültige römische Zahl sein");
    }

    // Mapping der römischen Ziffern zu ihren entsprechenden Werten
    const romanMap: Record<string, number> = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    };

    let total = 0; // Gesamtergebnis
    let prevValue = 0; // Vorheriger Wert, um Subtraktionsregeln zu berücksichtigen

    // Iteration über die römische Zahl von rechts nach links
    for (const char of roman.split('').reverse()) {
        const value = romanMap[char]; // Wert der aktuellen römischen Ziffer
        if (value < prevValue) {
            // Wenn der aktuelle Wert kleiner als der vorherige ist, wird er subtrahiert
            total -= value;
        } else {
            // Andernfalls wird er addiert
            total += value;
        }
        prevValue = value; // Aktualisierung des vorherigen Werts
    }
    return total; // Rückgabe der umgewandelten Zahl
}

// Hauptprogramm, wenn die Datei direkt ausgeführt wird
if (import.meta.main) {
    // Eingabeaufforderung für den Benutzer
    const num = parseInt(prompt("Geben Sie eine Zahl ein, die in eine römische Zahl umgewandelt werden soll:") || "");
    if (!isNaN(num)) {
        // Ausgabe der römischen Zahl
        console.log(`Römische Zahl: ${toRoman(num)}`);
    } else {
        // Fehlermeldung bei ungültiger Eingabe
        console.error("Ungültige Eingabe. Bitte geben Sie eine gültige Zahl ein.");
    }
}
// Funktion zur Umwandlung einer Zahl in eine römische Zahl
export function toRoman(num: number): string {
    // Überprüfung, ob die Eingabe eine gültige Zahl ist (zwischen 1 und 3999)
    if (typeof num !== 'number' || num <= 0 || num >= 4000) {
        throw new Error("Invalid input: Number must be between 1 and 3999");
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
        throw new Error("Invalid input: Must be a valid Roman numeral");
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
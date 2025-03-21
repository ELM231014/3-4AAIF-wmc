export function toRoman(num: number): string {
    if (typeof num !== 'number' || num <= 0 || num >= 4000) {
        throw new Error("Ungültige Eingabe: Die Zahl muss zwischen 1 und 3999 liegen");
    }

    const romanNumerals: [string, number][] = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];

    let result = "";
    for (const [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return result;
}

export function fromRoman(roman: string): number {
    if (typeof roman !== 'string' || !/^[IVXLCDM]+$/.test(roman)) {
        throw new Error("Ungültige Eingabe: Es muss eine gültige römische Zahl sein");
    }

    const romanMap: Record<string, number> = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    };

    let total = 0;
    let prevValue = 0;

    for (const char of roman.split('').reverse()) {
        const value = romanMap[char];
        if (value < prevValue) {
            total -= value;
        } else {
            total += value;
        }
        prevValue = value;
    }
    return total;
}

if (import.meta.main) {
    const choice = prompt("Wählen Sie eine Option:\n1: Zahl zu römischer Zahl\n2: Römische Zahl zu Zahl");

    if (choice === "1") {
        const num = parseInt(prompt("Geben Sie eine Zahl ein, die in eine römische Zahl umgewandelt werden soll:") || "");
        if (!isNaN(num)) {
            console.log(`Römische Zahl: ${toRoman(num)}`);
        } else {
            console.error("Ungültige Eingabe. Bitte geben Sie eine gültige Zahl ein.");
        }
    } else if (choice === "2") {
        const roman = prompt("Geben Sie eine römische Zahl ein, die in eine Zahl umgewandelt werden soll:") || "";
        try {
            console.log(`Zahl: ${fromRoman(roman)}`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("Ein unbekannter Fehler ist aufgetreten.");
            }
        }
    } else {
        console.error("Ungültige Auswahl. Bitte wählen Sie 1 oder 2.");
    }
}
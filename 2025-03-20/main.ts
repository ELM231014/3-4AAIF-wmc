function toRoman(num: number): string {
    const romanNumerals: [number, string][] = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];

    let result = "";
    for (const [value, symbol] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

// Einlesen  über Deno
if (import.meta.main) {
    const input = prompt("Geben Sie eine Zahl ein: ");
    if (input !== null) {
        const number = parseInt(input, 10);
        if (!isNaN(number) && number > 0) {
            console.log(`Römische Zahl: ${toRoman(number)}`);
        } else {
            console.log("Bitte geben Sie eine gültige positive Zahl ein.");
        }
    } else {
        console.log("Eingabe abgebrochen.");
    }
}
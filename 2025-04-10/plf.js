// Die Klasse `Person` repräsentiert eine Person mit Eigenschaften wie Name, Geschlecht, Größe und Gewicht.
class Person {
    /**
     * Konstruktor der Klasse `Person`.
     * @param {string} name - Der vollständige Name der Person.
     * @param {string} gender - Das Geschlecht der Person ('m' für männlich, 'f' für weiblich).
     * @param {number} groesseM - Die Größe der Person in Metern.
     * @param {number} gewichtKG - Das Gewicht der Person in Kilogramm.
     */
    constructor(name, gender, groesseM, gewichtKG) {
        // Überprüfen, ob das Geschlecht gültig ist ('m' oder 'f').
        if (gender !== 'm' && gender !== 'f') {
            throw new Error('wrong gender'); // Fehler werfen, wenn das Geschlecht ungültig ist.
        }
        this.name = name; // Vollständiger Name der Person.
        this.gender = gender; // Geschlecht der Person.
        this.groesseM = groesseM; // Größe der Person in Metern.
        this.gewichtKG = gewichtKG; // Gewicht der Person in Kilogramm.
    }

    /**
     * Gibt die Größe der Person in Zentimetern zurück.
     * @returns {number} Die Größe in Zentimetern.
     */
    groesseCM() {
        return Math.round(this.groesseM * 100); // Umrechnung von Metern in Zentimeter.
    }

    /**
     * Gibt den Vornamen der Person zurück.
     * @returns {string} Der Vorname.
     */
    vorName() {
        return this.name.split(' ')[0]; // Der Vorname ist der erste Teil des Namens.
    }

    /**
     * Gibt den Nachnamen der Person zurück.
     * @returns {string} Der Nachname.
     */
    nachName() {
        return this.name.split(' ')[1]; // Der Nachname ist der zweite Teil des Namens.
    }

    /**
     * Gibt eine String-Repräsentation der Person zurück.
     * @returns {string} Eine Beschreibung der Person mit Name, Größe und Gewicht.
     */
    toString() {
        return `${this.vorName()} ${this.nachName()} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
    }

    /**
     * Berechnet den Body-Mass-Index (BMI) der Person.
     * @returns {number} Der BMI-Wert.
     */
    getBmi() {
        return this.gewichtKG / (this.groesseM * this.groesseM); // Formel: Gewicht / (Größe^2).
    }

    /**
     * Bestimmt den Gewichtstyp der Person basierend auf Geschlecht und BMI.
     * @returns {string} Der Gewichtstyp ('Untergewicht', 'Normalgewicht', 'Übergewicht').
     */
    getGewichtType() {
        const bmi = this.getBmi(); // Berechnung des BMI.
        if (this.gender == 'f') { // Gewichtsklassifikation für Frauen.
            if (bmi < 19) return 'Untergewicht';
            if (bmi <= 24) return 'Normalgewicht';
            return 'Übergewicht';
        } else { // Gewichtsklassifikation für Männer.
            if (bmi < 20) return 'Untergewicht';
            if (bmi <= 25) return 'Normalgewicht';
            return 'Übergewicht';
        }
    }
}

// Export der Klasse `Person`, damit sie in anderen Dateien verwendet werden kann.
export { Person };
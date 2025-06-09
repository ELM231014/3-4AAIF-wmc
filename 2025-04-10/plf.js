class Person {
    constructor(name, gender, groesseM, gewichtKG) {
        if (gender !== 'm' && gender !== 'f') {
            throw new Error('wrong gender');
        }
        this.name = name;
        this.gender = gender;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
    }

    groesseCM() {
        return Math.round(this.groesseM * 100);
    }

    vorName() {
        return this.name.split(' ')[0];
    }

    nachName() {
        return this.name.split(' ')[1];
    }

    toString() {
        return `${this.vorName()} ${this.nachName()} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
    }

    getBmi() {
        return this.gewichtKG / (this.groesseM * this.groesseM);
    }

    getGewichtType() {
        const bmi = this.getBmi();
        if (this.gender == 'f') {
            if (bmi < 19) return 'Untergewicht';
            if (bmi <= 24) return 'Normalgewicht';
            return 'Übergewicht';
        } else {
            if (bmi < 20) return 'Untergewicht';
            if (bmi <= 25) return 'Normalgewicht';
            return 'Übergewicht';
        }
    }
}
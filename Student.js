// Student.js - Třída Student

/**
 * Třída reprezentující studenta.
 */
export class Student {
    // Vlastnosti (Properties)
    jmeno; // Jméno studenta
    znamky; // Pole čísel reprezentující známky [1-5]

    /**
     * Konstruktor pro vytvoření instance Student.
     * @param {string} jmeno - Jméno studenta.
     * @param {number[]} znamky - Pole známek studenta (čísla).
     */
    constructor(jmeno, znamky) {
        this.jmeno = jmeno;
        this.znamky = znamky;
    }

    // Metody (Methods)

    /**
     * Vrací popis studenta a jeho známek.
     * @returns {string} Popis studenta.
     */
    popis() {
        return `Student: ${this.jmeno}\nZnámky: [${this.znamky.join(', ')}]`;
    }

    /**
     * Spočítá průměrné hodnocení studenta.
     * @returns {number} Průměrná známka.
     */
    spocitejHodnoceni() {
        if (this.znamky.length === 0) {
            return 0;
        }
        // Součet všech známek
        const soucet = this.znamky.reduce((akumulator, aktualni) => akumulator + aktualni, 0);
        // Průměr
        const prumer = soucet / this.znamky.length;
        // Vracíme zaokrouhleno na dvě desetinná místa
        return Math.round(prumer * 100) / 100;
    }
}

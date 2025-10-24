// main.js - Spouštěcí skript

// Import třídy Student z modulu
import { Student } from './Student.js';

// Krátký spouštěcí skript
(function() {
    // 1. Vytvoření instance třídy Student
    const honza = new Student("Honza Novák", [1, 2, 1, 3, 1]);

    // 2. Volání metod a výpis do konzole

    console.log("--- Mini Projekt: Třída Student ---");
    
    // Metoda popis()
    console.log(honza.popis()); 
    // Vypíše: "Student: Honza Novák\nZnámky: [1, 2, 1, 3, 1]"

    // Metoda spocitejHodnoceni()
    const prumer = honza.spocitejHodnoceni();
    console.log(`Průměrné hodnocení: ${prumer}`);
    // Vypíše: "Průměrné hodnocení: 1.6"

    console.log("-----------------------------------");
})();

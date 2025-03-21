import { assertEquals, assertThrows } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { toRoman, fromRoman } from "./main.ts"; // Importiere die Funktionen aus main.ts

// Test für die Funktion `toRoman`
Deno.test("toRoman converts numbers correctly", () => {
    assertEquals(toRoman(1), "I");
    assertEquals(toRoman(3999), "MMMCMXCIX");
    assertEquals(toRoman(2024), "MMXXIV");
});

// Test für die Funktion `fromRoman`
Deno.test("fromRoman converts numerals correctly", () => {
    assertEquals(fromRoman("X"), 10);
    assertEquals(fromRoman("MMXXIV"), 2024);
    assertEquals(fromRoman("MCMXC"), 1990);
});

// Test für ungültige Eingaben
Deno.test("Invalid inputs throw errors", () => {
    assertThrows(() => toRoman(0), Error, "Ungültige Eingabe: Die Zahl muss zwischen 1 und 3999 liegen");
    assertThrows(() => toRoman(4000), Error, "Ungültige Eingabe: Die Zahl muss zwischen 1 und 3999 liegen");
    assertThrows(() => fromRoman("INVALID"), Error, "Ungültige Eingabe: Es muss eine gültige römische Zahl sein");
});
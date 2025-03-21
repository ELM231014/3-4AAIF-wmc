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
    assertThrows(() => toRoman(0), Error, "Invalid input: Number must be between 1 and 3999");
    assertThrows(() => toRoman(4000), Error, "Invalid input: Number must be between 1 and 3999");
    assertThrows(() => fromRoman("INVALID"), Error, "Invalid input: Must be a valid Roman numeral");
});
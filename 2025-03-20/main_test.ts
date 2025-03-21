import { assertEquals, assertThrows } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { toRoman, fromRoman } from "./main.ts";

Deno.test("toRoman converts numbers correctly", () => {
    assertEquals(toRoman(1), "I");
    assertEquals(toRoman(3999), "MMMCMXCIX");
    assertEquals(toRoman(2024), "MMXXIV");
});

Deno.test("fromRoman converts numerals correctly", () => {
    assertEquals(fromRoman("X"), 10);
    assertEquals(fromRoman("MMXXIV"), 2024);
    assertEquals(fromRoman("MCMXC"), 1990);
});

Deno.test("Invalid inputs throw errors", () => {
    assertThrows(() => toRoman(0), Error, "Ungültige Eingabe");
    assertThrows(() => toRoman(4000), Error, "Ungültige Eingabe");
    assertThrows(() => fromRoman("INVALID"), Error, "Ungültige Eingabe");
});

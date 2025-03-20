import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts"; // Aktuelle Version verwenden

// Definition der Funktion `add` (falls sie nicht in main.ts existiert)
export function add(a: number, b: number): number {
  return a + b;
}

// Test der Funktion `add`
Deno.test("add function test", () => {
  assertEquals(add(2, 3), 5); // Erwartetes Ergebnis: 2 + 3 = 5
});
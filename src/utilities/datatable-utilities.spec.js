import { expect } from "chai";

import { generateRows, generateColumns } from "./datatable-utilities";

describe("DataTable utilities", () => {
  const data = [
    { species: "Bird People", name: "Bridperson", origin: "Bird World" },
    { species: "Plutonian", name: "Snowville", origin: "Pluto" },
    { species: "Zigerion", name: "Prince Nebulon", origin: "Spaceship" }
  ];
  const columns = [
    { label: "Species", key: "species", visible: true },
    { label: "Name", key: "name", visible: false },
    { label: "Origin", key: "origin", visible: true }
  ];

  it("should return correct amount of columns (only visible columns)", () => {
    const expected = 2;
    const actual = generateColumns(columns, data).length;
    expect(actual).equals(expected);
  });

  it("should return corrent amount of rows", () => {
    const expected = 3;
    const actual = generateRows(columns, data).length;
    expect(actual).equals(expected);
  });
});

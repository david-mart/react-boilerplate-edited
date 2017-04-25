import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { PureDataTable } from "./index";

describe("<DataTable />", () => {
  const props = {
    rows: {
      test: [
        { species: "Bird People", name: "Bridperson", origin: "Bird World" },
        { species: "Plutonian", name: "Snowville", origin: "Pluto" },
        { species: "Zigerion", name: "Prince Nebulon", origin: "Spaceship" }
      ]
    },
    columns: {
      test: [
        { label: "Species", key: "species", visible: true },
        { label: "Name", key: "name", visible: false },
        { label: "Origin", key: "origin", visible: true }
      ]
    },
    dataType: "test",
    fetchDatatableData: () => {},
    fetchDatatableColumns: () => {}
  };

  it("should have correct labels on columns", () => {
    const wrapper = shallow(<PureDataTable {...props} />);
    const expected = "Origin";
    const actual = wrapper.find("TableHeaderColumn").at(1).props().children;
    expect(actual).equals(expected);
  });

  it("should have correct row order and display correct data", () => {
    const wrapper = shallow(<PureDataTable {...props} />);
    const expected = "Spaceship";
    const actual = wrapper
      .find("TableBody")
      .find("TableRow")
      .at(2)
      .find("TableRowColumn")
      .at(1)
      .props().children;
    expect(actual).equals(expected);
  });
});

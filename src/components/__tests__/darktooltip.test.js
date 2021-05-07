import React from "react";
import renderer from "react-test-renderer";
import { DarkTooltip } from "../DarkTooltip";

describe("Dark tooltip component", () => {
  test("Matches snapshot", () => {
    const tree = renderer
      .create(
        <DarkTooltip title="Add">
          <p>Prueba</p>
        </DarkTooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

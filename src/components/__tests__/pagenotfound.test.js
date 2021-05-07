import React from "react";
import renderer from "react-test-renderer";
import PageNotFound from "../PageNotFound";

describe("Page not found component", () => {
  test("Matches snapshot", () => {
    const tree = renderer.create(<PageNotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

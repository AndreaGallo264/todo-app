import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer component", () => {
  test("Matches snapshot", () => {
    const tree = renderer
      .create(
        <Router>
          <Footer />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

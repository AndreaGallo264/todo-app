import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import data from "../../data.json";
import ToDoApp from "../ToDoApp";

describe("To do App component", () => {
  test("Matches snapshot", () => {
    const mockStore = configureMockStore();
    const store = mockStore({ list: data, lastId: data.length });
    const tree = renderer
      .create(
        <Provider store={store}>
          <ToDoApp />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

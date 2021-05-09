import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ToDoList from "../ToDoList";

describe("Empty ToDoList component", () => {
  test("Matches snapshot", () => {
    const mockStore = configureMockStore();
    const store = mockStore({ list: [], lastId: 0 });
    const tree = renderer
      .create(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

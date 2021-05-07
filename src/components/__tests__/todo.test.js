import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import data from "../../data.json";
import ToDo from "../ToDo";

describe("ToDo component", () => {
  test("Matches snapshot", () => {
    const mockStore = configureMockStore();
    const store = mockStore({ list: data, lastId: data.length });
    const tree = renderer
      .create(
        <Provider store={store}>
          <ToDo
            todo={{
              id: 1,
              task: "Give dog a bath",
              complete: true,
              dueDate: "2021-05-08",
            }}
          />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

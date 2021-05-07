import { Selector } from "testcafe";

//prettier-ignore
fixture `Tasks suite`.page `http://localhost:3000/`;

//Selectors
const filterBtn = Selector("header > div > button");
const completedItem = Selector("ul > div.Mui-selected");

test("Filter completed tasks", async (t) => {
  await t.click(filterBtn).expect(completedItem.exists).notOk();
});
